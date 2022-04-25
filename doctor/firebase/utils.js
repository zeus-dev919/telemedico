import { initializeApp, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore } from "firebase/firestore";
// Origin
// const firebaseConfig = {
//   apiKey: "AIzaSyDd53NzsC0SnP5Zk5v4iZXLeqJdYrkRldg",
//   authDomain: "medipocket-1944c.firebaseapp.com",
//   projectId: "medipocket-1944c",
//   storageBucket: "medipocket-1944c.appspot.com",
//   messagingSenderId: "657591050698",
//   appId: "1:657591050698:web:1ecb7382070a454e42af33",
//   measurementId: "G-6YZNLZ0Z7P"
// };

// Alt
const firebaseConfig = {
  apiKey: "AIzaSyAr6wi3ppuXHIQ2yTlPvIIdmstmAFyA4nQ",
  authDomain: "medi-4f1a1.firebaseapp.com",
  projectId: "medi-4f1a1",
  storageBucket: "medi-4f1a1.appspot.com",
  messagingSenderId: "390880272049",
  appId: "1:390880272049:web:e92b1e08b1c470b6528c90",
  measurementId: "G-NZHNBL9Z27",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = getApp();
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const storage = getStorage(app);
// const analytics = getAnalytics();

export { app, storage, db };

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBA8G9kgvUPsUT_r8RPSdlwFHysfY6Gpms",
//   authDomain: "bible-ea768.firebaseapp.com",
//   projectId: "bible-ea768",
//   storageBucket: "bible-ea768.appspot.com",
//   messagingSenderId: "174554426540",
//   appId: "1:174554426540:web:a15c6d0f9e6483bc774309",
//   measurementId: "G-82G113JX4F",
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore();
// const storage = getStorage();

// export { auth, db, storage };
