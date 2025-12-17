// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUl7grdvcb5-ufiGCEllCIjM5Bgj8v98U",
  authDomain: "startup-429ca.firebaseapp.com",
  projectId: "startup-429ca",
  storageBucket: "startup-429ca.firebasestorage.app",
  messagingSenderId: "1059182084002",
  appId: "1:1059182084002:web:17f94640583439c141fcfb",
  measurementId: "G-3FPQ3LEPV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)