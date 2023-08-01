// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXqTt9bDDsBe5iBVSQxny44xb-8kOqX0I",
  authDomain: "fir-course-b4107.firebaseapp.com",
  projectId: "fir-course-b4107",
  storageBucket: "fir-course-b4107.appspot.com",
  messagingSenderId: "211256351754",
  appId: "1:211256351754:web:4f6d06bd989b0e893cd3f3",
  measurementId: "G-25EVKMFQ3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);