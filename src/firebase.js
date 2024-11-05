// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSH4xPaW4p6jOA0NNSm-WDvTOIheUl4q4",
  authDomain: "munim-ali.firebaseapp.com",
  projectId: "munim-ali",
  storageBucket: "munim-ali.firebasestorage.app",
  messagingSenderId: "564172549438",
  appId: "1:564172549438:web:f9c6afd77f333319e6d06f",
  measurementId: "G-PMVHK9Z4X4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
