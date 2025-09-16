// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZQ98nX27rBHZyJVH1C4yWr-M0iRg4tJ8",
  authDomain: "netflixclone-894d6.firebaseapp.com",
  projectId: "netflixclone-894d6",
  storageBucket: "netflixclone-894d6.appspot.com",
  messagingSenderId: "779407573254",
  appId: "1:779407573254:web:43c05700f67048691f9e87",
  measurementId: "G-KJ5RH9N6E4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth= getAuth()