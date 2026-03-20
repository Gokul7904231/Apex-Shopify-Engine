import * as admin from 'firebase-admin';

// Configuration prioritized by user request
const projectId = process.env.FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT || 'gk-stores-2780f';

if (!admin.apps.length) {
  const isEmulator = !!process.env.FIREBASE_AUTH_EMULATOR_HOST;

  if (isEmulator) {
    admin.initializeApp({ projectId });
    console.log(`🔥 Firebase Admin (Emulator) initialized for project: ${projectId}`);
  } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    // Production / GAC mode
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId
    });
    console.log(`🚀 Firebase Admin (Production) initialized via credentials for: ${projectId}`);
  } else {
    // Fallback mode
    admin.initializeApp({ projectId });
    console.log(`⚠️ Firebase Admin (Fallback) initialized for: ${projectId}`);
  }
}

export const firebaseAdmin = admin;
