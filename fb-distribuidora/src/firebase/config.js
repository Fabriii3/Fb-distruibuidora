// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXPNaU8qu_zXbqOyDHsUll4Eqxj1nfWq8",
  authDomain: "reactjs-ecomerse.firebaseapp.com",
  projectId: "reactjs-ecomerse",
  storageBucket: "reactjs-ecomerse.appspot.com",
  messagingSenderId: "1023565123641",
  appId: "1:1023565123641:web:4b263c580e917243d0fde8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()