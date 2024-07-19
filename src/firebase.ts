// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgjuNftyhfKTvyZm9rmnXgTWVANbdBDRo",
  authDomain: "todo-firebase-41c76.firebaseapp.com",
  projectId: "todo-firebase-41c76",
  storageBucket: "todo-firebase-41c76.appspot.com",
  messagingSenderId: "853574158731",
  appId: "1:853574158731:web:4a38d8986ae665a1e6078e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };