// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWw230SXBt9RvMt9vJNCx-LgKpW6ToC2g",
  authDomain: "login-project-c9226.firebaseapp.com",
  projectId: "login-project-c9226",
  storageBucket: "login-project-c9226.appspot.com",
  messagingSenderId: "41435649238",
  appId: "1:41435649238:web:b3327e59e04cd9fb546577",
  measurementId: "G-ZKG6HNLQ5V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
