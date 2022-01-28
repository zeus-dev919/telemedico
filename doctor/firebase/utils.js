import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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
  apiKey: "AIzaSyBXo2h9mJ3bBfckgpfElVZQGyITvYk_yyw",
  authDomain: "medipocket-e876b.firebaseapp.com",
  projectId: "medipocket-e876b",
  storageBucket: "medipocket-e876b.appspot.com",
  messagingSenderId: "583710522933",
  appId: "1:583710522933:web:0e5fcad56f91e40270fb7c",
  measurementId: "G-SWSV012JMG",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const storage = getStorage();

// export { auth, db, storage };
export { storage };
