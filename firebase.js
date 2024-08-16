// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtkfukhSBdNswjPbHpMckvhwXIXhZuC-Q",
  authDomain: "flashcard-saas-66539.firebaseapp.com",
  projectId: "flashcard-saas-66539",
  storageBucket: "flashcard-saas-66539.appspot.com",
  messagingSenderId: "801567746233",
  appId: "1:801567746233:web:927c1939b83f370d075368",
  measurementId: "G-83PP83JZY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
