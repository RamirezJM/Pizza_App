// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6zHvMadYQdnFbQfBtUwb1XumWLo1jo90",
  authDomain: "pizzaplanet-7f896.firebaseapp.com",
  projectId: "pizzaplanet-7f896",
  storageBucket: "pizzaplanet-7f896.firebasestorage.app",
  messagingSenderId: "52161701807",
  appId: "1:52161701807:web:c64dd7f0d76cbb5351715a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const dbPizzasRef = collection(db, 'pizzas')
export const dbOrdersRef = collection(db, 'orders')