import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBBdeQkgxkarLHpQqtRQ2eSRVZZ6wBLj8Q",
  authDomain: "fir-react-clothing-db.firebaseapp.com",
  databaseURL: "https://fir-react-clothing-db.firebaseio.com",
  projectId: "fir-react-clothing-db",
  storageBucket: "fir-react-clothing-db.appspot.com",
  messagingSenderId: "1039724496480",
  appId: "1:1039724496480:web:7928af3293d1305798e505",
  measurementId: "G-VT1HRZDSYQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
