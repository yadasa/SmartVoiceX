# Credentials / Secrets needed (SmartVoiceX)

This repo is currently a static-site mirror. As we add Firebase Functions + external integrations, these are the credentials you (Kei) will need to provide via **Firebase Functions Secret Manager** (recommended) or your deployment environment.

## Firebase
- **Firebase project**: `keiazodentai`
  - The static site currently uses the Firebase Web config (public) for Auth + Firestore.
  - No extra secret is required for Firebase Auth/Firestore client usage.

## ElevenLabs (Xi)
These are required to create/manage SmartVoiceX agents via the ElevenLabs API from server-side code.

- **`ELEVENLABS_API_KEY`**
  - Where used: Firebase Function endpoint that creates ElevenLabs agents.
  - Setup (example):
    - `firebase functions:secrets:set ELEVENLABS_API_KEY`
    - Attach to v2 function with `onRequest({ secrets: ['ELEVENLABS_API_KEY'] }, ...)`

## (Optional / future)
Add here as we wire up more features.

- `STRIPE_SECRET_KEY` (if/when SmartVoiceX adds paid plans)
- `STRIPE_WEBHOOK_SECRET` (if/when SmartVoiceX adds webhooks)
- `SENDGRID_API_KEY` or similar (if/when SmartVoiceX emails users)

## Notes
- Do **not** embed private API keys in `site/assets/*.js` because this is a public static site.
- All privileged calls (like creating ElevenLabs agents) must go through a server endpoint (Firebase Functions) that verifies the Firebase ID token.
