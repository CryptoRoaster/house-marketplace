import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXiTdom-C6Y_aZia6e4FNqssEoCApUF8A",
  authDomain: "house-marketplace-app-caad1.firebaseapp.com",
  projectId: "house-marketplace-app-caad1",
  storageBucket: "house-marketplace-app-caad1.appspot.com",
  messagingSenderId: "814511101771",
  appId: "1:814511101771:web:5eeea2dd28fb3a10b2bace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()