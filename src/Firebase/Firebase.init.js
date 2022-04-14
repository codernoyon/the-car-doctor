// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIswCQy_4R5XNL5nf5COeo6gwLln9WJk8",
  authDomain: "the-car-doctor1.firebaseapp.com",
  projectId: "the-car-doctor1",
  storageBucket: "the-car-doctor1.appspot.com",
  messagingSenderId: "59705616291",
  appId: "1:59705616291:web:9b191c00c5bd06ac169c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;