// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-7014a.firebaseapp.com",
  projectId: "blog-7014a",
  storageBucket: "blog-7014a.appspot.com",
  messagingSenderId: "895548331189",
  appId: "1:895548331189:web:17a6c043372832fa609afc"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);