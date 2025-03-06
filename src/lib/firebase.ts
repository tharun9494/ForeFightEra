import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXGcJYwXMjny3mp--zMfMyCOFeGmJP0VI",
  authDomain: "forefight-era.firebaseapp.com",
  projectId: "forefight-era",
  storageBucket: "forefight-era.firebasestorage.app",
  messagingSenderId: "978450259117",
  appId: "1:978450259117:web:11c6fe5c83bfec6f613a24",
  measurementId: "G-2R4YDZYCWT"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Add reCAPTCHA verification
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}