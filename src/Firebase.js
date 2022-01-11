import firebase from "firebase/app";
import database from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDv5ZPib3hM7gwb1hwKLsc0FbwOPzyL5N8",
  authDomain: "react-firebase-blog-3f301.firebaseapp.com",
  databaseURL: "https://react-firebase-blog-3f301-default-rtdb.firebaseio.com",
  projectId: "react-firebase-blog-3f301",
  storageBucket: "react-firebase-blog-3f301.appspot.com",
  messagingSenderId: "493509416978",
  appId: "1:493509416978:web:be1b2bf0c2acdd6c0da0cb"
};
 
let firebaseCache;
 
export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }
 
  firebase.initializeApp(firebaseConfig);
  firebaseCache = firebase;
  return firebase;
};