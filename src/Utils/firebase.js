// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrmSADPDE660DaOYD9H6m63KgKra5alNk",
  authDomain: "leenetflixgpt-4cb06.firebaseapp.com",
  projectId: "leenetflixgpt-4cb06",
  storageBucket: "leenetflixgpt-4cb06.firebasestorage.app",
  messagingSenderId: "980159813828",
  appId: "1:980159813828:web:0ee5de0210e3a669931191",
  measurementId: "G-WB7VRB8P6N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
