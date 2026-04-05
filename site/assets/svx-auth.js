/* SmartVoiceX Firebase Auth + Firestore profile (static site)
 * - Sign in / sign up modal
 * - Sign up requires: email, desired username (unique), phone number
 * - Stores profile in Firestore
 *
 * Notes:
 * - Phone verification / reCAPTCHA is intentionally NOT implemented (data capture only)
 * - Username uniqueness is best-effort client-side via Firestore transaction.
 */

(function () {
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBlLzmciptG2J_66VX8Cq0wR33s8s09lkk",
    authDomain: "keiazodentai.firebaseapp.com",
    projectId: "keiazodentai",
    storageBucket: "keiazodentai.firebasestorage.app",
    messagingSenderId: "107537267749",
    appId: "1:107537267749:web:853fd1460fdbeb20e093cc",
  };

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of children) node.appendChild(c);
    return node;
  }

  function $(sel, root = document) {
    return root.querySelector(sel);
  }

  function setStatus(text, kind = 'info') {
    const s = $('#svx-auth-status');
    if (!s) return;
    s.classList.remove('error', 'success');
    if (kind === 'error') s.classList.add('error');
    if (kind === 'success') s.classList.add('success');
    s.textContent = text || '';
  }

  function normalizeUsername(input) {
    return String(input || '').trim().toLowerCase();
  }

  function validateUsername(usernameLower) {
    // simple rule: 3-20 chars, a-z 0-9 underscore
    if (!usernameLower) return 'Username is required.';
    if (usernameLower.length < 3) return 'Username must be at least 3 characters.';
    if (usernameLower.length > 20) return 'Username must be 20 characters or less.';
    if (!/^[a-z0-9_]+$/.test(usernameLower)) return 'Username can only use letters, numbers, and underscores.';
    return null;
  }

  function ensureFirebase() {
    if (!window.firebase) throw new Error('Firebase SDK not loaded');
    if (!firebase.apps || !firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    const auth = firebase.auth();
    const db = firebase.firestore();
    return { auth, db };
  }

  function openModal(mode = 'signin') {
    $('#svx-auth-backdrop')?.classList.add('open');
    $('#svx-auth-modal')?.classList.add('open');
    setMode(mode);
  }

  function closeModal() {
    $('#svx-auth-backdrop')?.classList.remove('open');
    $('#svx-auth-modal')?.classList.remove('open');
    setStatus('');
  }

  // Signed-in dashboard modal
  function openSignedInModal() {
    $('#svx-auth-backdrop')?.classList.add('open');
    $('#svx-signedin-modal')?.classList.add('open');
  }

  function closeSignedInModal() {
    $('#svx-signedin-modal')?.classList.remove('open');
    if (!$('#svx-auth-modal')?.classList.contains('open') && !$('#svx-agent-modal')?.classList.contains('open')) {
      $('#svx-auth-backdrop')?.classList.remove('open');
    }
  }

  function setMode(mode) {
    const signinTab = $('#svx-tab-signin');
    const signupTab = $('#svx-tab-signup');
    const signinForm = $('#svx-form-signin');
    const signupForm = $('#svx-form-signup');

    const isSignUp = mode === 'signup';
    signinTab?.classList.toggle('active', !isSignUp);
    signupTab?.classList.toggle('active', isSignUp);
    signinForm?.toggleAttribute('hidden', isSignUp);
    signupForm?.toggleAttribute('hidden', !isSignUp);

    setStatus('');
  }

  function setAuthButtonSignedOut() {
    const nav = $('#svx-nav-auth');
    if (nav) nav.textContent = 'Sign in';

    const btn = $('#svx-auth-btn');
    if (btn) btn.textContent = 'Sign in';

    const menu = $('#svx-auth-menu');
    if (menu) menu.innerHTML = '';
  }

  function setAuthButtonSignedIn(user, profile) {
    const nav = $('#svx-nav-auth');
    if (nav) nav.textContent = 'My Account';

    const btn = $('#svx-auth-btn');
    const label = (profile && profile.username) ? `@${profile.username}` : (user.email || 'Account');
    if (btn) btn.textContent = label;

    const menu = $('#svx-auth-menu');
    if (menu) {
      menu.innerHTML = '';

      const accountBtn = el('button', { class: 'svx-menu-item', text: 'Account' });
      accountBtn.addEventListener('click', () => {
        menu.classList.remove('open');
        try { openSignedInModal(); } catch (_) {}
      });

      const signOutBtn = el('button', { class: 'svx-menu-item', text: 'Sign out' });
      signOutBtn.addEventListener('click', async () => {
        try {
          const { auth } = ensureFirebase();
          await auth.signOut();
          menu.classList.remove('open');
        } catch (e) {
          console.warn('[svx-auth] signOut failed', e);
        }
      });

      menu.appendChild(accountBtn);
      // Agent creator menu item is injected later.
      menu.appendChild(signOutBtn);
    }
  }

  async function loadProfile(db, uid) {
    try {
      const snap = await db.collection('users').doc(uid).get();
      if (!snap.exists) return null;
      return snap.data() || null;
    } catch (e) {
      console.warn('[svx-auth] loadProfile failed', e);
      return null;
    }
  }

  async function ensureProfileExists(db, user) {
    const ref = db.collection('users').doc(user.uid);
    const snap = await ref.get();
    if (snap.exists) return snap.data() || null;

    const minimal = {
      uid: user.uid,
      email: user.email || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    await ref.set(minimal, { merge: true });
    return minimal;
  }

  function fmtTimestamp(ts) {
    try {
      if (!ts) return '';
      const d = ts.toDate ? ts.toDate() : (ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts));
      return d.toLocaleString();
    } catch (_) {
      return '';
    }
  }

  function renderList(container, items, emptyText) {
    if (!container) return;
    container.innerHTML = '';

    if (!items || !items.length) {
      container.appendChild(el('div', { class: 'svx-card-sub', text: emptyText || 'No items yet.' }));
      return;
    }

    const ul = el('ul', { class: 'svx-list' });
    for (const it of items) {
      const title = it.title || it.summary || it.name || it.id || 'Item';
      const sub = it.sub || it.createdAt || it.when || '';

      ul.appendChild(el('li', { class: 'svx-list-item' }, [
        el('div', { class: 'svx-list-title', text: title }),
        sub ? el('div', { class: 'svx-list-sub', text: sub }) : el('div', { class: 'svx-list-sub', text: '' }),
      ]));
    }

    container.appendChild(ul);
  }

  function setText(id, text) {
    const n = typeof id === 'string' ? $(`#${id}`) : id;
    if (!n) return;
    n.textContent = text == null ? '' : String(text);
  }

  function renderSkeletonList(container, rows = 3) {
    if (!container) return;
    container.innerHTML = '';
    const ul = el('ul', { class: 'svx-list svx-skeleton-list', 'aria-hidden': 'true' });
    for (let i = 0; i < rows; i++) {
      ul.appendChild(el('li', { class: 'svx-list-item svx-skeleton' }, [
        el('div', { class: 'svx-skel-line svx-skel-title' }),
        el('div', { class: 'svx-skel-line svx-skel-sub' }),
      ]));
    }
    container.appendChild(ul);
  }

  async function refreshLatestWindowsDownload() {
    const status = $('#svx-download-status');
    const btn = $('#svx-download-btn');
    const meta = $('#svx-download-meta');

    if (status) {
      status.classList.remove('error', 'success');
      status.textContent = 'Checking for latest Windows app…';
    }
    if (btn) {
      btn.setAttribute('disabled', 'disabled');
      btn.removeAttribute('href');
    }
    if (meta) meta.textContent = '';

    try {
      const { auth } = ensureFirebase();
      const user = auth.currentUser;
      if (!user) throw new Error('Not signed in.');

      const token = await user.getIdToken();

      const resp = await fetch('/api/svx/app/latest-exe', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || data?.ok === false) {
        const msg = data?.error || `Download service error (HTTP ${resp.status}).`;
        if (status) {
          status.classList.add('error');
          status.textContent = msg;
        }
        return;
      }

      const url = data?.url || data?.downloadUrl || data?.signedUrl;
      const filename = data?.filename || data?.name || 'SmartVoiceX-Setup.exe';
      const version = data?.version || data?.tag || '';
      const size = Number(data?.sizeBytes || data?.size || 0);
      const updatedAt = data?.updatedAt || data?.createdAt || data?.publishedAt;

      if (!url) {
        if (status) {
          status.classList.add('error');
          status.textContent = 'No download URL returned.';
        }
        return;
      }

      if (btn) {
        btn.removeAttribute('disabled');
        btn.setAttribute('href', url);
        btn.setAttribute('download', filename);
      }

      const parts = [];
      if (version) parts.push(`v${version}`);
      if (size) parts.push(`${(size / (1024 * 1024)).toFixed(1)} MB`);
      const ts = fmtTimestamp(updatedAt);
      if (ts) parts.push(`Updated ${ts}`);
      if (meta) meta.textContent = parts.join(' • ');

      if (status) {
        status.classList.add('success');
        status.textContent = 'Ready to download.';
      }
    } catch (e) {
      if (status) {
        status.classList.add('error');
        status.textContent = e?.message || 'Failed to load download info.';
      }
    }
  }

  async function refreshSignedInDashboard() {
    const summariesWrap = $('#svx-live-summaries');
    const apptsWrap = $('#svx-appointments');
    const errWrap = $('#svx-dashboard-status');

    if (errWrap) {
      errWrap.classList.remove('error', 'success');
      errWrap.textContent = '';
    }

    renderSkeletonList(summariesWrap, 3);
    renderSkeletonList(apptsWrap, 3);

    let auth, db;
    try {
      ({ auth, db } = ensureFirebase());
    } catch (e) {
      if (errWrap) {
        errWrap.classList.add('error');
        errWrap.textContent = 'Firebase not available.';
      }
      return;
    }

    const user = auth.currentUser;
    if (!user) return;

    // Profile header
    try {
      const profile = await loadProfile(db, user.uid);
      const username = profile?.username || user.displayName || (user.email ? user.email.split('@')[0] : 'Account');
      setText('svx-profile-name', username ? `@${username}`.replace('@@', '@') : 'Account');
      setText('svx-profile-email', user.email || profile?.email || '');
    } catch (_) {
      setText('svx-profile-name', user.email ? user.email.split('@')[0] : 'Account');
      setText('svx-profile-email', user.email || '');
    }

    // Latest Windows download
    await refreshLatestWindowsDownload();

    // Live summaries: best-effort read. Collection names can differ by backend.
    try {
      const qs = await db
        .collection('users').doc(user.uid)
        .collection('callSummaries')
        .orderBy('createdAt', 'desc')
        .limit(5)
        .get();

      const items = qs.docs.map((d) => {
        const data = d.data() || {};
        const who = data.callerName || data.caller || data.from || '';
        const head = data.headline || data.title || data.summary || data.intent || 'Call summary';
        return {
          id: d.id,
          title: who ? `${who} — ${head}` : head,
          sub: fmtTimestamp(data.createdAt || data.timestamp || data.startedAt),
        };
      });

      renderList(summariesWrap, items, 'No summaries yet. Once your agent goes live, recent calls will show up here.');
    } catch (_) {
      renderList(summariesWrap, [], 'No summaries yet. Once your agent goes live, recent calls will show up here.');
    }

    // Appointments: best-effort read.
    try {
      const qs = await db
        .collection('users').doc(user.uid)
        .collection('appointments')
        .orderBy('startAt', 'asc')
        .limit(5)
        .get();

      const items = qs.docs.map((d) => {
        const data = d.data() || {};
        const name = data.patientName || data.customerName || data.name || 'Appointment';
        const when = fmtTimestamp(data.startAt || data.when || data.createdAt);
        const note = data.reason || data.type || data.location || '';
        return {
          id: d.id,
          title: note ? `${name} — ${note}` : name,
          sub: when,
        };
      });

      renderList(apptsWrap, items, 'No upcoming appointments yet. When your calendar/CRM is connected, they’ll appear here.');
    } catch (_) {
      renderList(apptsWrap, [], 'No upcoming appointments yet. When your calendar/CRM is connected, they’ll appear here.');
    }
  }

  function mountUI() {
    // FAB removed; keep modal/backdrop support via navbar triggers.
    // if ($('#svx-auth-fab')) return;

    // FAB removed (we use the navbar Sign in button instead)
    // const fab = el('div', { id: 'svx-auth-fab' }, [
    //   el('button', { id: 'svx-auth-btn', type: 'button', text: 'Sign in' }),
    //   el('div', { id: 'svx-auth-menu' }),
    // ]);

    const backdrop = el('div', { id: 'svx-auth-backdrop' });

    const modal = el('div', { id: 'svx-auth-modal', role: 'dialog', 'aria-modal': 'true' }, [
      el('div', { class: 'svx-modal' }, [
        el('div', { class: 'svx-modal-header' }, [
          el('div', {}, [
            el('div', { class: 'svx-modal-title', text: 'SmartVoiceX account' }),
            el('div', { class: 'svx-modal-sub', text: 'Sign in to manage your AI phone agents — or create an account to deploy your first workflow.' }),
          ]),
          el('button', { class: 'svx-close', type: 'button', text: '×' }),
        ]),

        el('div', { class: 'svx-tabs' }, [
          el('button', { id: 'svx-tab-signin', class: 'svx-tab active', type: 'button', text: 'Sign in' }),
          el('button', { id: 'svx-tab-signup', class: 'svx-tab', type: 'button', text: 'Sign up' }),
        ]),

        // Sign in
        el('form', { id: 'svx-form-signin', class: 'svx-form' }, [
          el('label', {}, [
            el('span', { text: 'Email' }),
            el('input', { id: 'svx-signin-email', type: 'email', autocomplete: 'email', placeholder: 'you@company.com' }),
          ]),
          el('label', {}, [
            el('span', { text: 'Password' }),
            el('input', { id: 'svx-signin-password', type: 'password', autocomplete: 'current-password', placeholder: '••••••••' }),
          ]),
          el('div', { class: 'svx-actions' }, [
            el('button', { id: 'svx-signin-submit', class: 'svx-primary', type: 'submit', text: 'Sign in' }),
            el('button', { id: 'svx-forgot', class: 'svx-secondary', type: 'button', text: 'Forgot' }),
          ]),
        ]),

        // Sign up
        el('form', { id: 'svx-form-signup', class: 'svx-form', hidden: 'hidden' }, [
          el('label', {}, [
            el('span', { text: 'Email' }),
            el('input', { id: 'svx-signup-email', type: 'email', autocomplete: 'email', placeholder: 'you@company.com' }),
          ]),
          el('label', {}, [
            el('span', { text: 'Desired username' }),
            el('input', { id: 'svx-signup-username', type: 'text', autocomplete: 'username', placeholder: 'e.g. lakeside_clinic' }),
          ]),
          el('label', {}, [
            el('span', { text: 'Phone number' }),
            el('input', { id: 'svx-signup-phone', type: 'tel', autocomplete: 'tel', placeholder: 'e.g. +1 312 555 0123' }),
          ]),
          el('label', {}, [
            el('span', { text: 'Password' }),
            el('input', { id: 'svx-signup-password', type: 'password', autocomplete: 'new-password', placeholder: 'Min 6 characters' }),
          ]),
          el('div', { class: 'svx-actions' }, [
            el('button', { id: 'svx-signup-submit', class: 'svx-primary', type: 'submit', text: 'Create account' }),
            el('button', { id: 'svx-signup-cancel', class: 'svx-secondary', type: 'button', text: 'Cancel' }),
          ]),
        ]),

        el('div', { id: 'svx-auth-status', class: 'svx-status' }),
      ]),
    ]);

    document.body.appendChild(backdrop);
    document.body.appendChild(modal);

    // Signed-in modal shell (dashboard)
    const signedInModal = el('div', { id: 'svx-signedin-modal', role: 'dialog', 'aria-modal': 'true' }, [
      el('div', { class: 'svx-modal svx-dashboard' }, [
        el('div', { class: 'svx-modal-header svx-dashboard-header' }, [
          el('div', { class: 'svx-dashboard-head-left' }, [
            el('div', { class: 'svx-modal-title', text: 'SmartVoiceX' }),
            el('div', { class: 'svx-dashboard-profile' }, [
              el('div', { class: 'svx-profile-name', id: 'svx-profile-name', text: 'Account' }),
              el('div', { class: 'svx-profile-email', id: 'svx-profile-email', text: '' }),
            ]),
          ]),
          el('div', { class: 'svx-dashboard-head-actions' }, [
            el('button', { class: 'svx-secondary svx-compact', type: 'button', text: 'Refresh', id: 'svx-dashboard-refresh' }),
            el('button', { class: 'svx-secondary svx-compact', type: 'button', text: 'Sign out', id: 'svx-dashboard-signout' }),
            el('button', { class: 'svx-close', type: 'button', text: '×', id: 'svx-signedin-close' }),
          ]),
        ]),

        el('div', { class: 'svx-hero' }, [
          el('div', { class: 'svx-hero-copy' }, [
            el('div', { class: 'svx-hero-title', text: 'Deploy your next phone agent' }),
            el('div', { class: 'svx-hero-sub', text: 'Answer a few questions and we’ll generate a deployable workflow. You can iterate after launch.' }),
          ]),
          el('div', { class: 'svx-hero-actions' }, [
            el('button', { class: 'svx-primary', type: 'button', text: 'Create / deploy agent', id: 'svx-dashboard-create-agent' }),
          ]),
          el('div', { id: 'svx-dashboard-status', class: 'svx-status' }),
        ]),

        el('div', { class: 'svx-dashboard-grid' }, [
          el('div', { class: 'svx-card' }, [
            el('div', { class: 'svx-card-head' }, [
              el('div', { class: 'svx-card-title', text: 'Latest Windows download' }),
              el('a', { class: 'svx-primary svx-linkbtn', id: 'svx-download-btn', href: '#', text: 'Download .exe' }),
            ]),
            el('div', { id: 'svx-download-meta', class: 'svx-card-sub' }),
            el('div', { id: 'svx-download-status', class: 'svx-status' }),
          ]),

          el('div', { class: 'svx-card' }, [
            el('div', { class: 'svx-card-head' }, [
              el('div', { class: 'svx-card-title', text: 'Live summaries' }),
              el('div', { class: 'svx-card-pill', text: 'last 5' }),
            ]),
            el('div', { class: 'svx-card-sub', text: 'Recent calls handled by your agent(s).' }),
            el('div', { id: 'svx-live-summaries' }),
          ]),

          el('div', { class: 'svx-card svx-span-2' }, [
            el('div', { class: 'svx-card-head' }, [
              el('div', { class: 'svx-card-title', text: 'Appointments' }),
              el('div', { class: 'svx-card-pill', text: 'next 5' }),
            ]),
            el('div', { class: 'svx-card-sub', text: 'Upcoming bookings and confirmations.' }),
            el('div', { id: 'svx-appointments' }),
          ]),
        ]),
      ]),
    ]);

    document.body.appendChild(signedInModal);

    // Expose minimal programmatic API for on-page CTAs.
    window.SVXAuth = Object.assign(window.SVXAuth || {}, {
      openSignIn: async () => {
        try {
          const { auth } = ensureFirebase();
          if (auth.currentUser) {
            openSignedInModal();
            refreshSignedInDashboard();
            return;
          }
        } catch (_) {}
        openModal('signin');
      },
      openSignUp: () => openModal('signup'),
      openAccount: () => { openSignedInModal(); refreshSignedInDashboard(); },
      close: () => { closeModal(); closeSignedInModal(); },
      refreshDashboard: () => refreshSignedInDashboard(),
    });

    // Events
    // (FAB removed: navbar buttons call window.SVXAuth.openSignIn/openSignUp directly)

    $('.svx-close', modal)?.addEventListener('click', closeModal);
    $('#svx-signedin-close')?.addEventListener('click', closeSignedInModal);

    $('#svx-dashboard-refresh')?.addEventListener('click', async () => {
      const btn = $('#svx-dashboard-refresh');
      const s = $('#svx-dashboard-status');
      if (btn) btn.setAttribute('disabled', 'disabled');
      if (s) s.textContent = 'Refreshing…';
      await refreshSignedInDashboard();
      if (s) s.textContent = '';
      if (btn) btn.removeAttribute('disabled');
    });

    $('#svx-dashboard-signout')?.addEventListener('click', async () => {
      try {
        const { auth } = ensureFirebase();
        await auth.signOut();
        closeSignedInModal();
      } catch (e) {
        const s = $('#svx-dashboard-status');
        if (s) {
          s.classList.add('error');
          s.textContent = e?.message || 'Sign out failed.';
        }
      }
    });

    $('#svx-dashboard-create-agent')?.addEventListener('click', () => {
      try {
        window.SVXAuth?.openAgentCreator?.();
      } catch (_) {}
    });

    // Download button is an <a>; block clicks until we have a real URL.
    $('#svx-download-btn')?.addEventListener('click', (ev) => {
      const a = ev.currentTarget;
      if (!a || a.getAttribute('href') === '#' || a.hasAttribute('disabled')) {
        ev.preventDefault();
      }
    });

    // refresh when opening account modal
    $('#svx-auth-menu')?.addEventListener('transitionend', () => {});

    backdrop.addEventListener('click', () => {
      $('#svx-auth-menu')?.classList.remove('open');
      closeModal();
      closeSignedInModal();
    });

    $('#svx-tab-signin')?.addEventListener('click', () => setMode('signin'));
    $('#svx-tab-signup')?.addEventListener('click', () => setMode('signup'));

    $('#svx-forgot')?.addEventListener('click', async () => {
      const email = String($('#svx-signin-email')?.value || '').trim();
      if (!email) return setStatus('Enter your email first, then click Forgot.', 'error');
      try {
        const { auth } = ensureFirebase();
        await auth.sendPasswordResetEmail(email);
        setStatus('Password reset email sent.', 'success');
      } catch (e) {
        setStatus(e?.message || 'Failed to send reset email.', 'error');
      }
    });

    $('#svx-signup-cancel')?.addEventListener('click', () => {
      closeModal();
    });

    $('#svx-form-signin')?.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      setStatus('Signing in…');

      const email = String($('#svx-signin-email')?.value || '').trim();
      const password = String($('#svx-signin-password')?.value || '');

      if (!email) return setStatus('Email is required.', 'error');
      if (!password) return setStatus('Password is required.', 'error');

      try {
        const { auth, db } = ensureFirebase();
        const cred = await auth.signInWithEmailAndPassword(email, password);
        await ensureProfileExists(db, cred.user);
        setStatus('Signed in.', 'success');
        closeModal();
        // After successful sign-in, take the user to the signed-in dashboard (commit 0357404 modal).
        try {
          openSignedInModal();
          refreshSignedInDashboard();
        } catch (_) {}
      } catch (e) {
        setStatus(e?.message || 'Sign in failed.', 'error');
      }
    });

    $('#svx-form-signup')?.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      setStatus('Creating account…');

      const email = String($('#svx-signup-email')?.value || '').trim();
      const usernameRaw = String($('#svx-signup-username')?.value || '');
      const username = normalizeUsername(usernameRaw);
      const phone = String($('#svx-signup-phone')?.value || '').trim();
      const password = String($('#svx-signup-password')?.value || '');

      if (!email) return setStatus('Email is required.', 'error');
      const uErr = validateUsername(username);
      if (uErr) return setStatus(uErr, 'error');
      if (!phone) return setStatus('Phone number is required.', 'error');
      if (!password || password.length < 6) return setStatus('Password must be at least 6 characters.', 'error');

      try {
        const { auth, db } = ensureFirebase();

        // Create auth user first
        const cred = await auth.createUserWithEmailAndPassword(email, password);
        const uid = cred.user.uid;

        const usernameRef = db.collection('usernames').doc(username);
        const userRef = db.collection('users').doc(uid);

        // Transaction to claim username and write profile
        await db.runTransaction(async (tx) => {
          const existing = await tx.get(usernameRef);
          if (existing.exists) {
            const err = new Error('USERNAME_TAKEN');
            err.code = 'username_taken';
            throw err;
          }

          tx.set(usernameRef, {
            uid,
            username,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });

          tx.set(userRef, {
            uid,
            email,
            username,
            usernameLower: username,
            phone,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          }, { merge: true });
        });

        try {
          await cred.user.updateProfile({ displayName: username });
        } catch (_) {}

        setStatus('Account created.', 'success');
        closeModal();
        // After successful sign-up, take the user to the signed-in dashboard (commit 0357404 modal).
        try {
          openSignedInModal();
          refreshSignedInDashboard();
        } catch (_) {}
      } catch (e) {
        if (e?.code === 'username_taken' || e?.message === 'USERNAME_TAKEN') {
          setStatus('That username is taken. Try another.', 'error');
          return;
        }
        setStatus(e?.message || 'Sign up failed.', 'error');
      }
    });

    // (FAB removed) no menu-outside-click handler needed

    // refresh dashboard whenever it becomes visible
    const observer = new MutationObserver(() => {
      if ($('#svx-signedin-modal')?.classList.contains('open')) {
        refreshSignedInDashboard();
      }
    });
    observer.observe($('#svx-signedin-modal'), { attributes: true, attributeFilter: ['class'] });
  }

  async function init() {
    mountUI();

    let auth, db;
    try {
      ({ auth, db } = ensureFirebase());
    } catch (e) {
      console.warn('[svx-auth] Firebase not available yet:', e?.message || e);
      setAuthButtonSignedOut();
      return;
    }

    // Ensure auth persists across modal closes/page focus (default is usually LOCAL,
    // but set explicitly so it behaves consistently).
    try {
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    } catch (_) {}

    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setAuthButtonSignedOut();
        return;
      }

      // Ensure we have at least a minimal profile
      try {
        await ensureProfileExists(db, user);
      } catch (_) {}

      const profile = await loadProfile(db, user.uid);
      setAuthButtonSignedIn(user, profile);
    });
  }

  // Some pages may load scripts at end; ensure DOM ready.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// =========================
// SmartVoiceX Agent Creator (questionnaire → Firebase Function → aphrisoft)
// =========================
(function () {
  function $(sel, root = document) { return root.querySelector(sel); }

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'html') node.innerHTML = v;
      else node.setAttribute(k, v);
    }
    for (const c of children) node.appendChild(c);
    return node;
  }

  function setAgentStatus(text, kind = 'info') {
    const s = $('#svx-agent-status');
    if (!s) return;
    s.classList.remove('error', 'success');
    if (kind === 'error') s.classList.add('error');
    if (kind === 'success') s.classList.add('success');
    s.textContent = text || '';
  }

  function openAgentModal() {
    $('#svx-auth-backdrop')?.classList.add('open');
    $('#svx-agent-modal')?.classList.add('open');
    setAgentStatus('');
  }

  function closeAgentModal() {
    $('#svx-agent-modal')?.classList.remove('open');
    // Keep backdrop open only if auth modal is open
    if (!$('#svx-auth-modal')?.classList.contains('open') && !$('#svx-signedin-modal')?.classList.contains('open')) {
      $('#svx-auth-backdrop')?.classList.remove('open');
    }
    setAgentStatus('');
  }

  function mountAgentUI() {
    if ($('#svx-agent-modal')) return;

    const modal = el('div', { id: 'svx-agent-modal', role: 'dialog', 'aria-modal': 'true' }, [
      el('div', { class: 'svx-modal' }, [
        el('div', { class: 'svx-modal-header' }, [
          el('div', {}, [
            el('div', { class: 'svx-modal-title', text: 'Create a SmartVoiceX agent' }),
            el('div', { class: 'svx-modal-sub', text: 'Answer a few questions so we can deploy a voice workflow tailored to your operations.' }),
          ]),
          el('button', { class: 'svx-close', type: 'button', text: '×', id: 'svx-agent-close' }),
        ]),

        el('form', { id: 'svx-agent-form', class: 'svx-form' }, [
          el('label', {}, [el('span', { text: 'Business name' }), el('input', { id: 'svx-agent-business', type: 'text', placeholder: 'e.g. Lakeside Dental' })]),
          el('label', {}, [el('span', { text: 'Industry' }), el('input', { id: 'svx-agent-industry', type: 'text', placeholder: 'e.g. Dental, Oncology, Call Center, Home Services' })]),
          el('label', {}, [el('span', { text: 'Primary workflows (what should it do?)' }), el('input', { id: 'svx-agent-goals', type: 'text', placeholder: 'e.g. book appointments, confirm visits, follow up leads, outbound list calls' })]),
          el('label', {}, [el('span', { text: 'Must-do’s (rules it must follow)' }), el('input', { id: 'svx-agent-mustdos', type: 'text', placeholder: 'e.g. always confirm phone number; always offer next available slot' })]),
          el('label', {}, [el('span', { text: 'Never-do’s (hard prohibitions)' }), el('input', { id: 'svx-agent-neverdos', type: 'text', placeholder: 'e.g. never give medical advice; never quote pricing without approval' })]),
          el('label', {}, [el('span', { text: 'Scripts / talk tracks (optional)' }), el('input', { id: 'svx-agent-scripts', type: 'text', placeholder: 'Paste short scripts or guidelines' })]),
          el('label', {}, [el('span', { text: 'First message (exact first line when the call connects)' }), el('input', { id: 'svx-agent-firstmessage', type: 'text', placeholder: 'Hi, thanks for calling Lakeside Dental—how can I help today?' })]),
          el('label', {}, [el('span', { text: 'Personality' }), el('input', { id: 'svx-agent-personality', type: 'text', placeholder: 'Warm, confident, concise, professional' })]),
          el('label', {}, [el('span', { text: 'Seniority / role style' }), el('input', { id: 'svx-agent-seniority', type: 'text', placeholder: 'e.g. receptionist, office manager, sales rep' })]),

          el('label', {}, [
            el('span', { text: 'Should it hide that it’s AI?' }),
            el('input', { id: 'svx-agent-hideai', type: 'checkbox' }),
          ]),

          el('label', {}, [
            el('span', { text: 'Can it transfer calls?' }),
            el('input', { id: 'svx-agent-transfer', type: 'checkbox' }),
          ]),
          el('label', { id: 'svx-agent-transfer-to-wrap', hidden: 'hidden' }, [
            el('span', { text: 'If yes, where should it transfer?' }),
            el('input', { id: 'svx-agent-transfer-to', type: 'text', placeholder: 'e.g. +1 312 555 0100 or “front desk”' }),
          ]),

          el('label', {}, [el('span', { text: 'Greeting style (tone, pace, language)' }), el('input', { id: 'svx-agent-greeting-sound', type: 'text', placeholder: 'e.g. calm + reassuring, clear, no jargon; auto-detect Spanish' })]),

          el('div', { class: 'svx-actions' }, [
            el('button', { class: 'svx-primary', type: 'submit', text: 'Create agent' }),
            el('button', { class: 'svx-secondary', type: 'button', text: 'Cancel', id: 'svx-agent-cancel' }),
          ]),

          el('div', { id: 'svx-agent-status', class: 'svx-status' }),
        ]),
      ]),
    ]);

    document.body.appendChild(modal);

    $('#svx-agent-close')?.addEventListener('click', closeAgentModal);
    $('#svx-agent-cancel')?.addEventListener('click', closeAgentModal);

    const transfer = $('#svx-agent-transfer');
    transfer?.addEventListener('change', () => {
      const wrap = $('#svx-agent-transfer-to-wrap');
      if (!wrap) return;
      if (transfer.checked) wrap.removeAttribute('hidden');
      else wrap.setAttribute('hidden', 'hidden');
    });

    $('#svx-agent-form')?.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      setAgentStatus('Creating agent…');

      if (!window.firebase) return setAgentStatus('Firebase not loaded.', 'error');
      const auth = firebase.auth();
      const user = auth.currentUser;
      if (!user) return setAgentStatus('Please sign in first.', 'error');

      const body = {
        business: String($('#svx-agent-business')?.value || '').trim(),
        industry: String($('#svx-agent-industry')?.value || '').trim(),
        goals: String($('#svx-agent-goals')?.value || '').trim(),
        mustDos: String($('#svx-agent-mustdos')?.value || '').trim(),
        neverDos: String($('#svx-agent-neverdos')?.value || '').trim(),
        scripts: String($('#svx-agent-scripts')?.value || '').trim(),
        firstMessage: String($('#svx-agent-firstmessage')?.value || '').trim(),
        personality: String($('#svx-agent-personality')?.value || '').trim(),
        seniority: String($('#svx-agent-seniority')?.value || '').trim(),
        hideAI: Boolean($('#svx-agent-hideai')?.checked),
        transferCalls: Boolean($('#svx-agent-transfer')?.checked),
        transferTo: String($('#svx-agent-transfer-to')?.value || '').trim(),
        greetingSound: String($('#svx-agent-greeting-sound')?.value || '').trim(),
      };

      try {
        const token = await user.getIdToken();
        const resp = await fetch('/api/svx/agents/create', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        });

        const data = await resp.json().catch(() => ({}));
        if (!resp.ok || !data.ok) {
          setAgentStatus(data.error || 'Failed to create agent.', 'error');
          return;
        }

        setAgentStatus('Agent created.', 'success');
        setTimeout(closeAgentModal, 700);
      } catch (e) {
        setAgentStatus(e?.message || 'Failed to create agent.', 'error');
      }
    });

    // Make it available to on-page CTAs.
    window.SVXAuth = Object.assign(window.SVXAuth || {}, {
      openAgentCreator: () => openAgentModal(),
    });
  }

  function injectMenuItem() {
    const menu = $('#svx-auth-menu');
    if (!menu) return;
    if ($('#svx-menu-create-agent')) return;

    const btn = el('button', {
      class: 'svx-menu-item',
      id: 'svx-menu-create-agent',
      type: 'button',
      text: 'Create / deploy agent',
    });

    btn.addEventListener('click', () => {
      menu.classList.remove('open');
      openAgentModal();
    });

    menu.prepend(btn);
  }

  function init() {
    mountAgentUI();

    try {
      if (!window.firebase) return;
      const auth = firebase.auth();
      auth.onAuthStateChanged((user) => {
        if (user) injectMenuItem();
      });
    } catch (_) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
