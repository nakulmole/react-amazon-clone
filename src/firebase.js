import firebase from "firebase";
// replace this config code with your own firebase config code
const firebaseConfig = {
  apiKey: "AIzaSyBnGQxEsQqoToMMRD8sNygO7qo9A6dzbz8",
  authDomain: "ecom-website-19e72.firebaseapp.com",
  databaseURL: "https://ecom-website-19e72.firebaseio.com",
  projectId: "ecom-website-19e72",
  storageBucket: "ecom-website-19e72.appspot.com",
  messagingSenderId: "689722139867",
  appId: "1:689722139867:web:e222b300c5b40317bf98fe",
  measurementId: "G-T5X0YBQ411",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
