// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "gomeal-food-delivery.firebaseapp.com",
    projectId: "gomeal-food-delivery",
    storageBucket: "gomeal-food-delivery.firebasestorage.app",
    messagingSenderId: "663478499617",
    appId: "1:663478499617:web:2b7cb0d51eea940352a660"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }