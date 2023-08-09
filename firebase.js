import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:import.meta.env.VITE_FIREBASE_MESAGING_SENDER_ID,
//     appId: import.meta.env.APP_ID
//   };
const firebaseConfig = {
  apiKey: "AIzaSyBCccaBYOXf0O-3DmOQ9yZ0cDA9yBhehEI",
  authDomain: "movie-flex-d0d3f.firebaseapp.com",
  projectId: "movie-flex-d0d3f",
  storageBucket: "movie-flex-d0d3f.appspot.com",
  messagingSenderId: "809459950569",
  appId: "1:809459950569:web:eb721c2fc8ad260143a178",
  measurementId: "G-CKEN19RK4M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
