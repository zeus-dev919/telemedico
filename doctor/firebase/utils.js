import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDd53NzsC0SnP5Zk5v4iZXLeqJdYrkRldg",
  authDomain: "medipocket-1944c.firebaseapp.com",
  projectId: "medipocket-1944c",
  storageBucket: "medipocket-1944c.appspot.com",
  messagingSenderId: "657591050698",
  appId: "1:657591050698:web:1ecb7382070a454e42af33",
  measurementId: "G-6YZNLZ0Z7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, storage, db, analytics };
