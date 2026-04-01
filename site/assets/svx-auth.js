/* SmartVoiceX Firebase Auth + Firestore profile (static site)
 * - Sign in / sign up modal
 * - Sign up requires: email, desired username (unique), phone number
 * - Stores profile in Firestore (same project as DentAI)
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
    const u = String(input || '').trim().toLowerCase();
    return u;
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
    const btn = $('#svx-auth-btn');
    if (btn) btn.textContent = 'Sign in';

    const menu = $('#svx-auth-menu');
    if (menu) menu.innerHTML = '';
  }

  function setAuthButtonSignedIn(user, profile) {
    const btn = $('#svx-auth-btn');
    const label = (profile && profile.username) ? `@${profile.username}` : (user.email || 'Account');
    if (btn) btn.textContent = label;

    const menu = $('#svx-auth-menu');
    if (menu) {
      menu.innerHTML = '';
      const accountBtn = el('button', { class: 'svx-menu-item', text: 'Open DentAI app' });
      accountBtn.addEventListener('click', () => {
        // Placeholder: you can change this to wherever the web app lives.
        window.open('https://smartvoicex.com', '_blank');
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

  function mountUI() {
    if ($('#svx-auth-fab')) return;

    const fab = el('div', { id: 'svx-auth-fab' }, [
      el('button', { id: 'svx-auth-btn', type: 'button', text: 'Sign in' }),
      el('div', { id: 'svx-auth-menu' }),
    ]);

    const backdrop = el('div', { id: 'svx-auth-backdrop' });

    const modal = el('div', { id: 'svx-auth-modal', role: 'dialog', 'aria-modal': 'true' }, [
      el('div', { class: 'svx-modal' }, [
        el('div', { class: 'svx-modal-header' }, [
          el('div', {}, [
            el('div', { class: 'svx-modal-title', text: 'SmartVoiceX account' }),
            el('div', { class: 'svx-modal-sub', text: 'Sign in, or create an account to access the SmartVoiceX + DentAI experience.' }),
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
            el('input', { id: 'svx-signup-username', type: 'text', autocomplete: 'username', placeholder: 'e.g. acme_dental' }),
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
    document.body.appendChild(fab);

    // Events
    $('#svx-auth-btn')?.addEventListener('click', async () => {
      const menu = $('#svx-auth-menu');
      // If signed in, toggle menu; if signed out, open modal.
      try {
        const { auth } = ensureFirebase();
        const user = auth.currentUser;
        if (user) {
          menu?.classList.toggle('open');
          return;
        }
      } catch (_) {}

      openModal('signin');
    });

    $('.svx-close', modal)?.addEventListener('click', closeModal);
    backdrop.addEventListener('click', () => {
      $('#svx-auth-menu')?.classList.remove('open');
      closeModal();
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
      } catch (e) {
        if (e?.code === 'username_taken' || e?.message === 'USERNAME_TAKEN') {
          setStatus('That username is taken. Try another.', 'error');
          return;
        }
        setStatus(e?.message || 'Sign up failed.', 'error');
      }
    });

    // close menu on outside click
    document.addEventListener('click', (ev) => {
      const menu = $('#svx-auth-menu');
      const fab = $('#svx-auth-fab');
      if (!menu || !fab) return;
      if (fab.contains(ev.target)) return;
      menu.classList.remove('open');
    });
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

  // Some Framer pages may load scripts at end; ensure DOM ready.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
