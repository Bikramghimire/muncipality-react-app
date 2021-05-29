import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDmaO-IyIbkwjQjSKizRNqP8tixXVpPOeM",
  authDomain: "godawari-muncipality.firebaseapp.com",
  projectId: "godawari-muncipality",
  storageBucket: "godawari-muncipality.appspot.com",
  messagingSenderId: "138434459222",
  appId: "1:138434459222:web:f088f7cfc9bc2141152df7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
