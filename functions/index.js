const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

function json(res, status, body) {
  res.status(status).set('content-type', 'application/json').send(JSON.stringify(body));
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
  } catch (e) {
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

// POST /api/svx/agents/create
// Body: { business, goals, mustDos, neverDos, scripts, firstMessage, personality, industry, seniority, hideAI, transferCalls, transferTo, greetingSound }
async function handleCreateAgent(req, res) {
  const decoded = await requireAuth(req);
  const body = requireJson(req);

  const uid = decoded.uid;

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

  if (!business) return json(res, 400, { ok: false, error: 'business_required' });
  if (!industry) return json(res, 400, { ok: false, error: 'industry_required' });
  if (!goals) return json(res, 400, { ok: false, error: 'goals_required' });
  if (!firstMessage) return json(res, 400, { ok: false, error: 'firstMessage_required' });
  if (!personality) return json(res, 400, { ok: false, error: 'personality_required' });
  if (!greetingSound) return json(res, 400, { ok: false, error: 'greetingSound_required' });
  if (transferCalls && !transferTo) return json(res, 400, { ok: false, error: 'transferTo_required' });

  // Store a draft in Firestore first (always)
  const agentRef = db.collection('users').doc(uid).collection('svxAgents').doc();
  const draft = {
    uid,
    status: 'creating',
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
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  await agentRef.set(draft, { merge: true });

  // TODO: Replace placeholder mapping below with the exact ElevenLabs agent-create schema.
  // We intentionally keep the user's inputs stored even if the external API call fails.
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

  // Placeholder: create an ElevenLabs "agent".
  // The exact endpoint/payload will be updated once we confirm the current ElevenLabs docs.
  let eleven = null;
  try {
    // Attempt a known conversation agent endpoint path (may change; will be corrected).
    eleven = await elevenFetch('/v1/convai/agents', {
      method: 'POST',
      body: {
        name: `SVX - ${business}`,
        // These fields are placeholders until we finalize schema.
        system_prompt: systemPrompt,
      },
    });

    await agentRef.set({
      status: 'ready',
      elevenlabs: eleven,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return json(res, 200, { ok: true, agentId: agentRef.id, elevenlabs: eleven });
  } catch (e) {
    await agentRef.set({
      status: 'error',
      error: {
        message: e.message || 'create_failed',
        details: e.details || null,
      },
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return json(res, e.status || 500, {
      ok: false,
      error: e.message || 'create_failed',
      details: e.details || null,
      agentId: agentRef.id,
    });
  }
}

function api(req, res) {
  // Basic CORS for browser calls (same-origin in Firebase Hosting is preferred)
  res.set('access-control-allow-origin', '*');
  res.set('access-control-allow-methods', 'GET,POST,OPTIONS');
  res.set('access-control-allow-headers', 'content-type,authorization');
  if (req.method === 'OPTIONS') return res.status(204).send('');

  try {
    const path = (req.path || '/').replace(/\/$/, '');

    if (req.method === 'GET' && (path === '' || path === '/')) {
      return json(res, 200, { ok: true, service: 'smartvoicex-api' });
    }

    if (req.method === 'POST' && (path === '/svx/agents/create' || path === '/api/svx/agents/create')) {
      return handleCreateAgent(req, res);
    }

    return json(res, 404, { ok: false, error: 'not_found', path });
  } catch (e) {
    return json(res, e.status || 500, { ok: false, error: e.message || 'internal_error' });
  }
}

exports.api = onRequest({
  region: 'us-central1',
  secrets: ['ELEVENLABS_API_KEY'],
}, api);
