// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9RYauTD_P1QMSq191tUi8ysIZ2YrzONM",
  authDomain: "jetflix-838b9.firebaseapp.com",
  projectId: "jetflix-838b9",
  storageBucket: "jetflix-838b9.appspot.com",
  messagingSenderId: "588443812592",
  appId: "1:588443812592:web:e1e607f99f8403e3e23835",
  measurementId: "G-CD83FB4BN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);