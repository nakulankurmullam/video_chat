// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNRBnUH5nu6JPi2KXhs2KFniwyotsXKU4",
  authDomain: "video-chat-c629d.firebaseapp.com",
  projectId: "video-chat-c629d",
  storageBucket: "video-chat-c629d.appspot.com",
  messagingSenderId: "380791211813",
  appId: "1:380791211813:web:486131eee0259b37517ccc",
  measurementId: "G-DFS3WFYWMH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);