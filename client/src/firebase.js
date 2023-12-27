// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-347c6.firebaseapp.com",
  projectId: "mern-auth-347c6",
  storageBucket: "mern-auth-347c6.appspot.com",
  messagingSenderId: "574621242242",
  appId: "1:574621242242:web:5da198f8369d647365f59b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);