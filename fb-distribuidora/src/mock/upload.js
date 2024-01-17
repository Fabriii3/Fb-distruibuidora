import MOCK_DATA from './data.json' assert {type: 'json'}

import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getFirestore} from "firebase/firestore"


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

const productosRef = collection(db , 'productos')

MOCK_DATA.forEach(item => {
    delete item.id 
  
    addDoc(productosRef ,item)
})