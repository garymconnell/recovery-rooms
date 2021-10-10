import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBY15-myYBQfzCxSzHvGNNdcVB3hxAwK_U",
  authDomain: "macs-recovery-5a84b.firebaseapp.com",
  projectId: "macs-recovery-5a84b",
  storageBucket: "macs-recovery-5a84b.appspot.com",
  messagingSenderId: "144773876353",
  appId: "1:144773876353:web:69c6beffda6c2cb9209b80",
  measurementId: "G-9H58G99PH7"
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
