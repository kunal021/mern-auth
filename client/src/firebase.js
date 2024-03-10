// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e5dea.firebaseapp.com",
  projectId: "mern-auth-e5dea",
  storageBucket: "mern-auth-e5dea.appspot.com",
  messagingSenderId: "552165597690",
  appId: "1:552165597690:web:235822614c26a87705c443",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
