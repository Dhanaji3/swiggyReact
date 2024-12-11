import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apikey: "AIzaSyCdxe03OwJRtWVt9e7RNNn_-4ciJ7TpxAY",
  authDomain: "siwggyreact.firebaseapp.com",
  projectId: "siwggyreact",
  storageBucket: "swiggyreact.firebasestorage.app",
  messagingSenderId: "875114474111",
  appId: "1:875114474111:web:7b53a0dd8d0a06e775ad4a",
  measurementId: "G-X0CY8HC5SW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
