// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWpK_SU7RXFFfcDG4EBwxpSRFNx5TZbL0",
    authDomain: "coffee-name.firebaseapp.com",
    projectId: "coffee-name",
    storageBucket: "coffee-name.firebasestorage.app",
    messagingSenderId: "259489571676",
    appId: "1:259489571676:web:f6b84ffd7b17c0beed9799",
    measurementId: "G-0D0TVMTG4K"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)