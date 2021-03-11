import firebase from "firebase/app";
import database from "firebase/database";

const config = {
    apiKey: "AIzaSyDv5ZPib3hM7gwb1hwKLsc0FbwOPzyL5N8",
    authDomain: "react-firebase-blog-3f301.firebaseapp.com",
    projectId: "react-firebase-blog-3f301",
    storageBucket: "react-firebase-blog-3f301.appspot.com",
    messagingSenderId: "493509416978",
    appId: "1:493509416978:web:be1b2bf0c2acdd6c0da0cb"
}

let firebaseCache;

export const getFirebase = () => {
    if (firebaseCache) {
        return firebaseCache;
    }

    firebase.initializeApp(config);
    firebaseCache = firebase;
    return firebase;
}