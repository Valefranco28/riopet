// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, } from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtén el objeto de autenticación



export { auth, signInWithEmailAndPassword };