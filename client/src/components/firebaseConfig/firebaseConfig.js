// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjHV3zBxsDlLj96VemZcyzoXsvNYhWS5A",
  authDomain: "convoverse-1fd47.firebaseapp.com",
  projectId: "convoverse-1fd47",
  storageBucket: "convoverse-1fd47.appspot.com",
  messagingSenderId: "410017162309",
  appId: "1:410017162309:web:2f12c268373efad761ef2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);