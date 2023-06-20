// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo0UdL2YyoMJ2kZYAX0f689UG6QwpX1yY",
  authDomain: "todo-app-yt-f1134.firebaseapp.com",
  projectId: "todo-app-yt-f1134",
  storageBucket: "todo-app-yt-f1134.appspot.com",
  messagingSenderId: "484208133313",
  appId: "1:484208133313:web:cf5d08ed3698a801cd0040",
  measurementId: "G-KD6M79BJ80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)