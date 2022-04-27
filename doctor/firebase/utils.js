import { initializeApp, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd53NzsC0SnP5Zk5v4iZXLeqJdYrkRldg",
  authDomain: "medipocket-1944c.firebaseapp.com",
  projectId: "medipocket-1944c",
  storageBucket: "medipocket-1944c.appspot.com",
  messagingSenderId: "657591050698",
  appId: "1:657591050698:web:1ecb7382070a454e42af33",
  measurementId: "G-6YZNLZ0Z7P",
};

initializeApp(firebaseConfig);
const app = getApp();
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const storage = getStorage(app);

export { app, storage, db };

