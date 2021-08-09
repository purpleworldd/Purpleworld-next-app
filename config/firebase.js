import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbF7puQwxzY0C5yQxDSEkwa6ptxjs9xYw",
  authDomain: "purpleworld-30392.firebaseapp.com",
  projectId: "purpleworld-30392",
  storageBucket: "purpleworld-30392.appspot.com",
  messagingSenderId: "782949271657",
  appId: "1:782949271657:web:2557df44a05c65e743faf8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
