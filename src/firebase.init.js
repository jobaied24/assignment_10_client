// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvM0ySE2P-LvRAApGKOWmQ-eH0jBKBEhM",
  authDomain: "assignment-10-auth-34fa2.firebaseapp.com",
  projectId: "assignment-10-auth-34fa2",
  storageBucket: "assignment-10-auth-34fa2.firebasestorage.app",
  messagingSenderId: "867517827516",
  appId: "1:867517827516:web:56d367eafeea981b8883b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);