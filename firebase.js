import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBaMrRw-6KYkBW_8p3i4LBCKWKm74aCgDQ",
  authDomain: "gary-recovery-room.firebaseapp.com",
  projectId: "gary-recovery-room",
  storageBucket: "gary-recovery-room.appspot.com",
  messagingSenderId: "766985351940",
  appId: "1:766985351940:web:3df03ea9a1ce75cd5ed651",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
