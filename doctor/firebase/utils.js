import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDp6rXG75cbD3iF01WUsyNKGt5QEME8AY",
  authDomain: "doctor-bec0a.firebaseapp.com",
  projectId: "doctor-bec0a",
  storageBucket: "doctor-bec0a.appspot.com",
  messagingSenderId: "963217372103",
  appId: "1:963217372103:web:b78742e8441004519f1fe2",
  measurementId: "G-W5FV11L5DM",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
