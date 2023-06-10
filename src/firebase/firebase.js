import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn0X53ww-SVeidvXp5PgYB62mpHTxB0ew",
  authDomain: "react-blog-d9148.firebaseapp.com",
  projectId: "react-blog-d9148",
  storageBucket: "react-blog-d9148.appspot.com",
  messagingSenderId: "1078737357999",
  appId: "1:1078737357999:web:5ee53cb2cc669405fe185a",
  measurementId: "G-5KZYTLREWG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
