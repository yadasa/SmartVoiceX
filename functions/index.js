// functions/index.js (Gen 2)
// IMPORTANT SYNC NOTE:
// This file is intended to be kept IN SYNC across BOTH repos:
// - github.com/yadasa/dentai
// - github.com/yadasa/SmartVoiceX
//
// If you update API routes, auth, or env/secrets here, mirror the exact same
// changes in SmartVoiceX/functions/index.js (and vice versa) to avoid
// accidentally deploying different backends to the same Firebase project.
// SYNC_SHA256: b8b53a13247747aeda31c4d53db1f0df4e79846edf12ddb903eb444ac5761268
// (sha256 of this file with CRLF normalized and this SYNC_SHA256 line removed)
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const Stripe = require("stripe");
const { onRequest } = require("firebase-functions/v2/https");

// Route modules (added later in repo history, keep mounted)
const { registerDemoSessionRoutes } = require('./routes/demoSession');
const { registerWidgetSmsGateRoutes } = require('./routes/widgetSmsGate');

// SmartVoiceX download helper
const { findLatestExe } = require('./_latestRelease');

admin.initializeApp();
const db = admin.firestore();

function cstNowParts(d = new Date()) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZoneName: 'shortOffset',
  });

  const parts = { year: '', month: '', day: '', hour: '', minute: '', second: '', timeZoneName: '' };
  for (const p of dtf.formatToParts(d)) {
    if (p.type in parts) parts[p.type] = p.value;
  }

  let off = String(parts.timeZoneName || '').replace(/^GMT/i, '');
  if (!off) off = '+00';
  if (!off.includes(':')) {
    let sign = '+';
    let num = off;
    if (off[0] === '+' || off[0] === '-') {
      sign = off[0];
      num = off.slice(1);
    }
    num = num.padStart(2, '0');
    off = sign + num + ':00';
  }

  const createdAtCstIso = '20' + parts.year + '-' + parts.month + '-' + parts.day + 'T' + parts.hour + ':' + parts.minute + ':' + parts.second + off;

  return {
    yy: parts.year,
    MM: parts.month,
    dd: parts.day,
    HH: parts.hour,
    mm: parts.minute,
    createdAtCstIso,
  };
}

const app = express();

/**
 * ✅ CRITICAL: Capture raw body for Stripe signature verification.
 * This will parse JSON normally but also store the raw Buffer on req.rawBody.
 */
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf; // Buffer
    },
  })
);

// Firebase Hosting rewrite forwards /api/** to this function.
// Strip the leading /api prefix so routes can remain /wallet/*, /svx/*, etc.
app.use((req, _res, next) => {
  try {
    if (typeof req.url === 'string' && req.url.startsWith('/api/')) {
      req.url = req.url.slice(4);
    }
  } catch (_) {}
  next();
});

// CORS AFTER json/verify is fine (doesn't affect body)
app.use(cors({ origin: true }));

// ==============================
// Extra route modules (demo sessions + widget SMS gate)
// ==============================
try { registerDemoSessionRoutes({ app, admin, db }); } catch (e) { console.warn('[routes] demoSession mount failed', e?.message || e); }
try { registerWidgetSmsGateRoutes({ app, admin, db }); } catch (e) { console.warn('[routes] widgetSmsGate mount failed', e?.message || e); }

/**
 * ✅ STRIPE WEBHOOK
 * Use req.rawBody (Buffer) for constructEvent
 */
app.post("/stripe/webhook", async (req, res) => {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey || !webhookSecret) {
    console.error("[WEBHOOK] Missing Stripe secrets");
    return res.status(500).send("Stripe not configured");
  }

  const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" });

  const sig = req.headers["stripe-signature"];
  const rawBody = req.rawBody; // Buffer

  if (!rawBody || !Buffer.isBuffer(rawBody)) {
    console.error("[WEBHOOK] rawBody missing or not Buffer");
    return res.status(400).send("Webhook Error: raw body missing");
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error("[WEBHOOK] signature verify failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    console.log("[WEBHOOK] type:", event.type, "id:", event.id, "livemode:", event.livemode);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const orgId = session?.metadata?.orgId || null;
      const uid = session?.metadata?.uid || null;
      const amountCents = session?.amount_total; // number
      const sessionId = session?.id;

      console.log("[WEBHOOK] session.id:", sessionId);
      console.log("[WEBHOOK] session.amount_total:", amountCents);
      console.log("[WEBHOOK] session.metadata:", session?.metadata);

      // IMPORTANT: do NOT 400 here — ACK 200 so Stripe doesn't keep retrying
      if (!orgId || !amountCents || amountCents <= 0 || !sessionId) {
        console.warn("[WEBHOOK] Missing metadata/amount", { orgId, amountCents, sessionId });
        return res.status(200).json({ received: true, skipped: true });
      }

      const txId = `stripe_checkout__${sessionId}`;

      await creditOrgWallet({
        orgId,
        txId,
        amountCents,
        uid,
        livemode: !!event.livemode,
        txType: 'topup',
        provider: 'stripe',
        stripeEventId: event.id,
        stripeSessionId: sessionId,
      });

      console.log("[WEBHOOK] Wallet credited OK", { orgId, amountCents, txId });
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error("[WEBHOOK] handler error:", err);
    // ACK 200 so Stripe doesn't loop retries; you can resend manually after fixing
    return res.status(200).json({ received: true, internalError: true });
  }
});

/**
 * CREATE CHECKOUT SESSION
 */
app.post("/wallet/create-checkout-session", async (req, res) => {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const appUrl = process.env.APP_URL || "http://localhost:3000";

    if (!stripeSecretKey) return res.status(500).json({ error: "Stripe not configured" });

    const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" });

    const { orgId, amountUsd, uid } = req.body || {};
    const amountCents = Math.round(Number(amountUsd) * 100);

    if (!orgId) return res.status(400).json({ error: "orgId required" });
    if (!Number.isFinite(amountCents) || amountCents <= 0) {
      return res.status(400).json({ error: "amountUsd must be > 0" });
    }

    // Best-effort: ensure uid belongs to org (prevents cross-org metadata abuse)
    if (uid) {
      const uSnap = await db.collection('users').doc(String(uid)).get();
      const uOrgId = uSnap.exists ? String(uSnap.data()?.orgId || '') : '';
      if (uOrgId && String(uOrgId) !== String(orgId)) {
        return res.status(403).json({ error: 'uid does not belong to orgId' });
      }
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Wallet Top-Up" },
            unit_amount: amountCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/#/topup-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/#/topup-cancelled`,
      metadata: {
        orgId: String(orgId),
        uid: uid ? String(uid) : "",
      },
    });

    console.log("CHECKOUT_URL_FULL:", session.url);
    console.log("CHECKOUT_SESSION_ID:", session.id);

    return res.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error("[create-checkout-session] error:", err);
    return res.status(500).json({ error: err.message || "server_error" });
  }
});

// ==============================
// Auto Top-up + Saved Cards
// ==============================
function orgWalletSettingsRef(orgId) {
  return db.collection('organizations').doc(String(orgId)).collection('settings').doc('wallet');
}

async function requireUidInOrgOrThrow(uid, orgId) {
  const u = String(uid || '').trim();
  const o = String(orgId || '').trim();
  if (!u) throw new Error('uid required');
  if (!o) throw new Error('orgId required');

  const uSnap = await db.collection('users').doc(u).get();
  if (!uSnap.exists) throw new Error('user profile missing');
  const uOrgId = String(uSnap.data()?.orgId || '');
  if (!uOrgId) throw new Error('user.orgId missing');
  if (uOrgId !== o) throw new Error('uid does not belong to orgId');

  return { uid: u, orgId: o, email: uSnap.data()?.email || null };
}

async function ensureStripeCustomerForOrg({ stripe, orgId }) {
  const ref = orgWalletSettingsRef(orgId);
  const snap = await ref.get();
  const existing = snap.exists ? (snap.data() || {}) : {};

  const stripeCustomerId = existing?.stripeCustomerId ? String(existing.stripeCustomerId) : '';
  if (stripeCustomerId) return stripeCustomerId;

  const orgSnap = await db.collection('organizations').doc(String(orgId)).get();
  const name = orgSnap.exists ? (orgSnap.data()?.name || '') : '';

  const customer = await stripe.customers.create({
    name: name || `Dentai Org ${String(orgId)}`,
    metadata: { orgId: String(orgId) },
  });

  await ref.set({ stripeCustomerId: customer.id, updatedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
  return customer.id;
}

// Create Stripe SetupIntent (client uses Stripe.js to confirm + create a PaymentMethod)
app.post('/wallet/create-setup-intent', async (req, res) => {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    if (!stripeSecretKey) return res.status(500).json({ error: 'Stripe not configured' });
    if (!publishableKey) return res.status(500).json({ error: 'Missing STRIPE_PUBLISHABLE_KEY' });

    const { orgId, uid } = req.body || {};
    await requireUidInOrgOrThrow(uid, orgId);

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' });
    const stripeCustomerId = await ensureStripeCustomerForOrg({ stripe, orgId });

    const si = await stripe.setupIntents.create({
      customer: stripeCustomerId,
      payment_method_types: ['card'],
      usage: 'off_session',
      metadata: { orgId: String(orgId), uid: String(uid) },
    });

    return res.json({ ok: true, clientSecret: si.client_secret, publishableKey });
  } catch (e) {
    return res.status(400).json({ error: e?.message || String(e) });
  }
});

// Attach a Stripe PaymentMethod to the org's Stripe customer and store as default for auto-topup
app.post('/wallet/save-payment-method', async (req, res) => {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) return res.status(500).json({ error: 'Stripe not configured' });

    const { orgId, uid, paymentMethodId } = req.body || {};
    if (!paymentMethodId) return res.status(400).json({ error: 'paymentMethodId required' });

    await requireUidInOrgOrThrow(uid, orgId);

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' });
    const stripeCustomerId = await ensureStripeCustomerForOrg({ stripe, orgId });

    // Attach + set default for invoice/off-session charges
    await stripe.paymentMethods.attach(String(paymentMethodId), { customer: stripeCustomerId });
    await stripe.customers.update(stripeCustomerId, {
      invoice_settings: { default_payment_method: String(paymentMethodId) },
    });

    await orgWalletSettingsRef(orgId).set(
      {
        stripeCustomerId,
        autoTopup: {
          paymentMethodId: String(paymentMethodId),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
      },
      { merge: true }
    );

    return res.json({ ok: true, stripeCustomerId, paymentMethodId: String(paymentMethodId) });
  } catch (e) {
    return res.status(400).json({ error: e?.message || String(e) });
  }
});

app.get('/wallet/payment-methods', async (req, res) => {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) return res.status(500).json({ error: 'Stripe not configured' });

    const orgId = req.query?.orgId;
    const uid = req.query?.uid;
    await requireUidInOrgOrThrow(uid, orgId);

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' });

    const settingsSnap = await orgWalletSettingsRef(orgId).get();
    const stripeCustomerId = settingsSnap.exists ? String(settingsSnap.data()?.stripeCustomerId || '') : '';
    if (!stripeCustomerId) return res.json({ ok: true, paymentMethods: [] });

    const pmList = await stripe.paymentMethods.list({ customer: stripeCustomerId, type: 'card' });
    const paymentMethods = (pmList.data || []).map((pm) => ({
      id: pm.id,
      brand: pm.card?.brand || null,
      last4: pm.card?.last4 || null,
      expMonth: pm.card?.exp_month || null,
      expYear: pm.card?.exp_year || null,
    }));

    return res.json({ ok: true, paymentMethods });
  } catch (e) {
    return res.status(400).json({ error: e?.message || String(e) });
  }
});

app.post('/wallet/payment-methods/detach', async (req, res) => {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) return res.status(500).json({ error: 'Stripe not configured' });

    const { orgId, uid, paymentMethodId } = req.body || {};
    if (!paymentMethodId) return res.status(400).json({ error: 'paymentMethodId required' });

    await requireUidInOrgOrThrow(uid, orgId);

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' });
    await stripe.paymentMethods.detach(String(paymentMethodId));

    // If detached card was selected, clear it
    const sRef = orgWalletSettingsRef(orgId);
    const sSnap = await sRef.get();
    const cur = sSnap.exists ? (sSnap.data() || {}) : {};
    const curPm = cur?.autoTopup?.paymentMethodId ? String(cur.autoTopup.paymentMethodId) : '';
    if (curPm && curPm === String(paymentMethodId)) {
      await sRef.set({ autoTopup: { paymentMethodId: null, updatedAt: admin.firestore.FieldValue.serverTimestamp() } }, { merge: true });
    }

    return res.json({ ok: true });
  } catch (e) {
    return res.status(400).json({ error: e?.message || String(e) });
  }
});

// Auto-topup check: if wallet balance < threshold => off-session PaymentIntent => credit wallet + tx log
app.post('/wallet/auto-topup/check', async (req, res) => {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) return res.status(500).json({ error: 'Stripe not configured' });

    const { orgId, uid, reason } = req.body || {};
    await requireUidInOrgOrThrow(uid, orgId);

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' });

    const settingsSnap = await orgWalletSettingsRef(orgId).get();
    const settings = settingsSnap.exists ? (settingsSnap.data() || {}) : {};

    const at = settings.autoTopup || {};
    const enabled = !!at.enabled;
    const thresholdUsd = Number(at.thresholdUsd ?? NaN);
    const topupAmountUsd = Number(at.topupAmountUsd ?? NaN);
    const paymentMethodId = at.paymentMethodId ? String(at.paymentMethodId) : '';

    const stripeCustomerId = settings.stripeCustomerId ? String(settings.stripeCustomerId) : '';

    if (!enabled) return res.json({ ok: true, action: 'disabled' });
    if (!Number.isFinite(thresholdUsd) || thresholdUsd < 0) return res.status(400).json({ error: 'Invalid thresholdUsd' });
    if (!Number.isFinite(topupAmountUsd) || topupAmountUsd <= 0) return res.status(400).json({ error: 'Invalid topupAmountUsd' });
    if (!paymentMethodId) return res.status(400).json({ error: 'Missing paymentMethodId' });
    if (!stripeCustomerId) return res.status(400).json({ error: 'Missing stripeCustomerId' });

    // current balance
    const walletRef = db.collection('organizations').doc(String(orgId)).collection('wallet').doc('main');
    const wSnap = await walletRef.get();
    const balanceCents = wSnap.exists ? Number(wSnap.data()?.balance || 0) : 0;

    if (!(balanceCents < Math.round(thresholdUsd * 100))) {
      return res.json({ ok: true, action: 'no_charge', balanceCents, thresholdUsd });
    }

    const nowMs = Date.now();
    const cooldownMs = 10 * 60 * 1000;
    const bucketMs = Math.floor(nowMs / cooldownMs) * cooldownMs;
    const idemKey = `orgAutoTopup_${String(orgId)}_${bucketMs}`;

    const amountCents = Math.round(topupAmountUsd * 100);

    const pi = await stripe.paymentIntents.create(
      {
        amount: amountCents,
        currency: 'usd',
        customer: stripeCustomerId,
        payment_method: paymentMethodId,
        off_session: true,
        confirm: true,
        metadata: { orgId: String(orgId), uid: String(uid), reason: String(reason || 'low_balance') },
      },
      { idempotencyKey: idemKey }
    );

    const txId = `AUTO_TOPUP__${pi.id}`;

    await creditOrgWallet({
      orgId,
      txId,
      amountCents,
      uid,
      livemode: !!pi.livemode,
      txType: 'auto-topup',
      provider: 'stripe_auto',
      stripePaymentIntentId: pi.id,
    });

    // record last charge time
    await orgWalletSettingsRef(orgId).set(
      {
        autoTopup: {
          lastChargeAtMs: nowMs,
          lastPaymentIntentId: pi.id,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
      },
      { merge: true }
    );

    return res.json({ ok: true, action: 'charged', paymentIntentId: pi.id, topupAmountUsd, amountCents, balanceCents });
  } catch (e) {
    return res.status(400).json({ error: e?.message || String(e) });
  }
});

async function creditOrgWallet({ orgId, txId, amountCents, uid, livemode, txType = 'topup', provider = 'stripe', stripeEventId = null, stripeSessionId = null, stripePaymentIntentId = null }) {
  const walletRef = db.collection('organizations').doc(orgId).collection('wallet').doc('main');

  // New txId format: {YYMMDD}{HHMM}{T}{amountCents} (CST)
  const p = cstNowParts(new Date());
  const cents = Number(amountCents);
  const txLogId = '' + p.yy + p.MM + p.dd + p.HH + p.mm + 'T' + String(cents);

  const txRef = walletRef.collection('transactions').doc(txLogId);

  let email = null;
  try {
    if (uid) {
      const uSnap = await db.collection('users').doc(String(uid)).get();
      if (uSnap.exists) email = uSnap.data()?.email || null;
    }
  } catch (_) {}

  await db.runTransaction(async (t) => {
    const existingTx = await t.get(txRef);
    if (existingTx.exists) return;

    const walletSnap = await t.get(walletRef);
    const current = walletSnap.exists ? (walletSnap.data() || {}) : {};
    const prev = Number(current.balance || 0);
    const next = prev + Number(cents);

    t.set(
      walletRef,
      {
        balance: next,
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    t.set(txRef, {
      createdAt: p.createdAtCstIso,
      amountUsd: Number((cents / 100).toFixed(2)),
      amountCents: Number(cents),
      type: txType,
      uid: uid || null,
      email: email || null,
      provider: provider || null,
      stripeEventId: stripeEventId || null,
      stripeSessionId: stripeSessionId || null,
      stripePaymentIntentId: stripePaymentIntentId || null,
      livemode: !!livemode,
      referenceTxId: txId || null,
    });
  });
}


// =========================================
// SmartVoiceX API (mounted into dentai/api)
// =========================================
function json(res, status, body) {
  return res.status(status).set('content-type', 'application/json').send(JSON.stringify(body));
}

function getBearerToken(req) {
  const h = req.headers.authorization || req.headers.Authorization;
  if (!h) return null;
  const m = String(h).match(/^Bearer\s+(.+)$/i);
  return m ? m[1] : null;
}

async function requireAuth(req) {
  const token = getBearerToken(req);
  if (!token) {
    const err = new Error('missing_bearer_token');
    err.status = 401;
    throw err;
  }
  try {
    return await admin.auth().verifyIdToken(token);
  } catch (_) {
    const err = new Error('invalid_bearer_token');
    err.status = 401;
    throw err;
  }
}

function requireJson(req) {
  if (!req.is('application/json')) {
    const err = new Error('expected_application_json');
    err.status = 415;
    throw err;
  }
  if (!req.body || typeof req.body !== 'object') {
    const err = new Error('invalid_json_body');
    err.status = 400;
    throw err;
  }
  return req.body;
}

async function elevenFetch(path, { method = 'GET', body } = {}) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    const err = new Error('missing_ELEVENLABS_API_KEY');
    err.status = 500;
    throw err;
  }

  const url = `https://api.elevenlabs.io${path}`;
  const resp = await fetch(url, {
    method,
    headers: {
      'xi-api-key': apiKey,
      'content-type': 'application/json',
      'accept': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await resp.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch (_) { data = { raw: text }; }

  if (!resp.ok) {
    const err = new Error('elevenlabs_error');
    err.status = 502;
    err.details = { status: resp.status, data };
    throw err;
  }
  return data;
}

// GET /svx/app/latest-exe
app.get('/svx/app/latest-exe', async (req, res) => {
  try {
    await requireAuth(req);

    const bucket = admin.storage().bucket('keiazodentai.firebasestorage.app');
    const prefix = 'installer/';
    const latest = await findLatestExe(bucket, prefix);
    if (!latest) return json(res, 404, { ok: false, error: 'no_exe_found', prefix });

    const file = latest.file;
    const [url] = await file.getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + 60 * 60 * 1000,
      responseDisposition: 'attachment; filename="SmartVoiceX-latest.exe"',
      responseType: 'application/octet-stream',
    });

    return json(res, 200, { ok: true, name: file.name, updated: latest.meta?.updated || null, url });
  } catch (e) {
    return json(res, e.status || 500, { ok: false, error: e.message || 'internal_error', details: e.details || null });
  }
});

// POST /svx/agents/create
app.post('/svx/agents/create', async (req, res) => {
  try {
    const decoded = await requireAuth(req);
    const body = requireJson(req);

    const uid = decoded.uid;
    const nickname = String(body.nickname || '').trim();

    const business = String(body.business || '').trim();
    const industry = String(body.industry || '').trim();
    const goals = String(body.goals || '').trim();
    const mustDos = String(body.mustDos || '').trim();
    const neverDos = String(body.neverDos || '').trim();
    const scripts = String(body.scripts || '').trim();
    const firstMessage = String(body.firstMessage || '').trim();
    const personality = String(body.personality || '').trim();
    const seniority = String(body.seniority || '').trim();
    const greetingSound = String(body.greetingSound || '').trim();
    const hideAI = Boolean(body.hideAI);
    const transferCalls = Boolean(body.transferCalls);
    const transferTo = String(body.transferTo || '').trim();

    if (!nickname) return json(res, 400, { ok: false, error: 'nickname_required' });
    if (!business) return json(res, 400, { ok: false, error: 'business_required' });
    if (!industry) return json(res, 400, { ok: false, error: 'industry_required' });
    if (!goals) return json(res, 400, { ok: false, error: 'goals_required' });
    if (!firstMessage) return json(res, 400, { ok: false, error: 'firstMessage_required' });
    if (!personality) return json(res, 400, { ok: false, error: 'personality_required' });
    if (!greetingSound) return json(res, 400, { ok: false, error: 'greetingSound_required' });
    if (transferCalls && !transferTo) return json(res, 400, { ok: false, error: 'transferTo_required' });

    const agentRef = db.collection('users').doc(uid).collection('svxAgents').doc();
    await agentRef.set({
      uid,
      status: 'creating',
      nickname,
      business,
      industry,
      goals,
      mustDos,
      neverDos,
      scripts,
      firstMessage,
      personality,
      seniority,
      hideAI,
      transferCalls,
      transferTo: transferCalls ? transferTo : null,
      greetingSound,
      phoneNumberSelected: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    const systemPrompt = [
      `You are a SmartVoiceX voice agent for a business.`,
      `Business: ${business}`,
      `Industry: ${industry}`,
      `Client goals: ${goals}`,
      mustDos ? `Must-do rules: ${mustDos}` : null,
      neverDos ? `Never-do rules: ${neverDos}` : null,
      scripts ? `Approved scripts / talk tracks: ${scripts}` : null,
      `Seniority / tone: ${seniority || 'professional'}`,
      `Personality: ${personality}`,
      `AI disclosure: ${hideAI ? 'Do NOT reveal you are AI unless explicitly asked.' : 'Be transparent if asked; do not lie.'}`,
      `Call transfers: ${transferCalls ? `Allowed. Transfer to: ${transferTo}` : 'Not allowed unless explicitly configured.'}`,
      `Greeting style request: ${greetingSound}`,
      `First message to say when the call connects: ${firstMessage}`,
    ].filter(Boolean).join('\n');

    const providerResp = await elevenFetch('/v1/convai/agents/create', {
      method: 'POST',
      body: {
        name: `SVX - ${nickname}`,
        conversation_config: {
          agent: {
            language: 'en',
            first_message: firstMessage,
            prompt: { prompt: systemPrompt },
          },
        },
        tags: ['smartvoicex', industry].filter(Boolean),
      },
    });

    await agentRef.set({
      status: 'ready',
      aphrisoft: providerResp,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return json(res, 200, { ok: true, agentId: agentRef.id, aphrisoft: providerResp });
  } catch (e) {
    return json(res, e.status || 500, { ok: false, error: e.message || 'create_failed', details: e.details || null });
  }
});

// Stripe subscription checkout (SmartVoiceX)
app.post('/svx/billing/checkout-session', async (req, res) => {
  try {
    const decoded = await requireAuth(req);
    const body = requireJson(req);
    const planKey = String(body.planKey || '').trim();
    if (!planKey) return json(res, 400, { ok: false, error: 'planKey_required' });

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) return json(res, 500, { ok: false, error: 'Payments not configured' });

    const priceEnvKey = `STRIPE_PRICE_${planKey.toUpperCase()}`;
    const priceId = process.env[priceEnvKey];
    if (!priceId) return json(res, 500, { ok: false, error: 'missing_price_id', priceEnvKey });

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' });
    const proto = (req.headers['x-forwarded-proto'] || 'https');
    const host = (req.headers['x-forwarded-host'] || req.headers.host || 'smartvoicex.com');
    const appUrl = `${proto}://${host}`.replace(/\/$/, '');

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: String(priceId), quantity: 1 }],
      success_url: `${appUrl}/dashboard.html?billing=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/dashboard.html?billing=cancelled&plan=${encodeURIComponent(planKey)}`,
      metadata: { uid: decoded.uid, planKey },
    });

    return json(res, 200, { ok: true, url: session.url, id: session.id });
  } catch (e) {
    return json(res, e.status || 500, { ok: false, error: e.message || 'server_error' });
  }
});

app.post('/svx/billing/confirm-checkout', async (req, res) => {
  try {
    const decoded = await requireAuth(req);
    const body = requireJson(req);
    const sessionId = String(body.sessionId || '').trim();
    if (!sessionId) return json(res, 400, { ok: false, error: 'sessionId_required' });

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) return json(res, 500, { ok: false, error: 'Payments not configured' });

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' });
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const metaUid = String(session?.metadata?.uid || '');
    const planKey = String(session?.metadata?.planKey || '').trim();
    if (!metaUid || metaUid !== decoded.uid) return json(res, 403, { ok: false, error: 'session_uid_mismatch' });
    if (!planKey) return json(res, 400, { ok: false, error: 'missing_planKey_in_session_metadata' });

    const status = String(session?.status || '').toLowerCase();
    if (status && status !== 'complete') return json(res, 409, { ok: false, error: 'session_not_complete', status });

    await db.collection('users').doc(decoded.uid).set({
      userPlan: planKey,
      stripe: {
        checkoutSessionId: session.id,
        customer: session.customer || null,
        subscription: session.subscription || null,
      },
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return json(res, 200, { ok: true, userPlan: planKey });
  } catch (e) {
    return json(res, e.status || 500, { ok: false, error: e.message || 'server_error' });
  }
});


exports.api = onRequest(
  {
    region: "us-central1",
    secrets: [
      "STRIPE_SECRET_KEY",
      "STRIPE_WEBHOOK_SECRET",
      "STRIPE_PUBLISHABLE_KEY",
      "APP_URL",
      "ELEVENLABS_API_KEY",
    ],
  },
  app
);
