// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-84ac6.firebaseapp.com",
  projectId: "mern-84ac6",
  storageBucket: "mern-84ac6.firebasestorage.app",
  messagingSenderId: "357947201208",
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);