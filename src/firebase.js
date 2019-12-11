import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCv74GeqnIUzr_3CGGOb_K9TVgMXh6w0LQ",
  authDomain: "gift-exchange-names.firebaseapp.com",
  databaseURL: "https://gift-exchange-names.firebaseio.com",
  projectId: "gift-exchange-names",
  storageBucket: "gift-exchange-names.appspot.com",
  messagingSenderId: "136782949691",
  appId: "1:136782949691:web:0269ac9d88171e6e1f9b1e"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export const firestore = firebase.firestore();

export default firebase;
