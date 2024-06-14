// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnGSoCZOPZPYGV3weCRB7AgzeJUdvaT2o",
  authDomain: "phocus-app-426218.firebaseapp.com",
  projectId: "phocus-app-426218",
  storageBucket: "phocus-app-426218.appspot.com",
  messagingSenderId: "945970564159",
  appId: "1:945970564159:web:9d96536194f5e29d7b7c8a",
  measurementId: "G-S6MWWE6KQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;