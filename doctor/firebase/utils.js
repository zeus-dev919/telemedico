import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyBDp6rXG75cbD3iF01WUsyNKGt5QEME8AY",
//   authDomain: "doctor-bec0a.firebaseapp.com",
//   projectId: "doctor-bec0a",
//   storageBucket: "doctor-bec0a.appspot.com",
//   messagingSenderId: "963217372103",
//   appId: "1:963217372103:web:b78742e8441004519f1fe2",
//   measurementId: "G-W5FV11L5DM",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCILSNGV57q21TeffjtUb5AU-bLYKyJhho",
  authDomain: "medipocket2022.firebaseapp.com",
  projectId: "medipocket2022",
  storageBucket: "medipocket2022.appspot.com",
  messagingSenderId: "262308121730",
  appId: "1:262308121730:web:7d17307b719356ffe4389b",
  measurementId: "G-4305QZX2HJ",
};

// Initialize Firebase
// initializeApp(firebaseConfig);
const storage = getStorage();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { storage, analytics };
