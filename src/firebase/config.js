import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1qbccHEyAQcqaPVQNiUKhHyCev_uygWc",
  authDomain: "database-university.firebaseapp.com",
  projectId: "database-university",
  storageBucket: "database-university.appspot.com",
  messagingSenderId: "183910226556",
  appId: "1:183910226556:web:1157e030599363fc20c7f9"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore( FirebaseApp )