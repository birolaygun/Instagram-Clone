// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz5JnDygHDicqkj9qHTL-_qjqGApYfOMQ",
  authDomain: "insta-brl.firebaseapp.com",
  projectId: "insta-brl",
  storageBucket: "insta-brl.appspot.com",
  messagingSenderId: "719292777829",
  appId: "1:719292777829:web:c9a06d726fb810a1d90d8c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
