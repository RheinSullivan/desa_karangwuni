import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATFrdz8sKyDvaFZF3KTww36_v4hyJ7Y9Q",
  authDomain: "rhein-sullivan-desa-karangwuni.firebaseapp.com",
  projectId: "rhein-sullivan-desa-karangwuni",
  storageBucket: "rhein-sullivan-desa-karangwuni.appspot.com",
  messagingSenderId: "506551058272",
  appId: "1:506551058272:web:1409b94cf7bccfadf82805",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
