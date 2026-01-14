// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2g8a_BBi9CGJQo6GypeGoe8fE9OImuYo",
  authDomain: "similar-with-chaldal.firebaseapp.com",
  projectId: "similar-with-chaldal",
  storageBucket: "similar-with-chaldal.firebasestorage.app",
  messagingSenderId: "563600356384",
  appId: "1:563600356384:web:476baf47e00afa42c3f845",
  measurementId: "G-RRB0XCMGS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);