// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4PM-LKic4iX6Gma2quY7gzlD74cdhceY",
  authDomain: "salt-bistro.firebaseapp.com",
  projectId: "salt-bistro",
  storageBucket: "salt-bistro.appspot.com",
  messagingSenderId: "677764223929",
  appId: "1:677764223929:web:db0964d3b67dcbb46cdc68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;