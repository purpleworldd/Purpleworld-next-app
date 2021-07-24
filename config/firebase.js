import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzV57-HwMoIHyA2flk0UgwvXxeAYmHRns",
  authDomain: "purpleworld-66d62.firebaseapp.com",
  projectId: "purpleworld-66d62",
  storageBucket: "purpleworld-66d62.appspot.com",
  messagingSenderId: "427802713636",
  appId: "1:427802713636:web:8b8075d6d5d20de6c3c2b1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
