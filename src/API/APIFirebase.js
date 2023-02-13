// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnuWd9CWfu5E_Sy7R1dy5I1HWQIj4TB64",
  authDomain: "favaloroia.firebaseapp.com",
  projectId: "favaloroia",
  storageBucket: "favaloroia.appspot.com",
  messagingSenderId: "1099204472949",
  appId: "1:1099204472949:web:00ed3f3582fac56f7bc83c",
  measurementId: "G-PTKZFPN6Y7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
