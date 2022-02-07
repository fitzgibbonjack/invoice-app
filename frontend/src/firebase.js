import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj3vPwZyV5qjJnu7IffInXsELTE8Vk4dw",
  authDomain: "invoice-app-1eb59.firebaseapp.com",
  projectId: "invoice-app-1eb59",
  storageBucket: "invoice-app-1eb59.appspot.com",
  messagingSenderId: "1076078195436",
  appId: "1:1076078195436:web:0780ee40ce71d8a1a6abc9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export default app;
