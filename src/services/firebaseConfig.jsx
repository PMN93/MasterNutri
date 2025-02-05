import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDVeHrfhFJ592vFGBQU9rODuqQA6HBCp0A",
  authDomain: "master-nutri-bb69b.firebaseapp.com",
  projectId: "master-nutri-bb69b",
  storageBucket: "master-nutri-bb69b.firebasestorage.app",
  messagingSenderId: "987480443664",
  appId: "1:987480443664:web:1e3e0d066ea52f52393395",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
