// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqwHod73J4VZVOG-knuW1JqGDyrOjCe0",
  authDomain: "proyecto-coder-69cff.firebaseapp.com",
  projectId: "proyecto-coder-69cff",
  storageBucket: "proyecto-coder-69cff.firebasestorage.app",
  messagingSenderId: "16221753866",
  appId: "1:16221753866:web:e7d2b3413d5a9a2a5485f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);