// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdxe03OwJRtWVt9e7RNNn_-4ciJ7TpxAY",
  authDomain: "swiggyreact.firebaseapp.com",
  projectId: "swiggyreact",
  storageBucket: "swiggyreact.firebasestorage.app",
  messagingSenderId: "875114474111",
  appId: "1:875114474111:web:7b53a0dd8d0a06e775ad4a",
  measurementId: "G-X0CY8HC5SW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
