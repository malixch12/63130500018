// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import{getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCItRF77XDi4U9ppYEjakETsZXOxTkcM3o",
  authDomain: "int305fb-de6bc.firebaseapp.com",
  projectId: "int305fb-de6bc",
  storageBucket: "int305fb-de6bc.appspot.com",
  messagingSenderId: "32148683724",
  appId: "1:32148683724:web:253604889713daa9e6fb69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init firestore service
const db = getFirestore()
export default db

