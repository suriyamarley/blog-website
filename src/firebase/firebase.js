import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzKWXCaAw-gIa3EK8YkX1OOcZMT_0QpRg",
  authDomain: "suriya-blog.firebaseapp.com",
  projectId: "suriya-blog",
  storageBucket: "suriya-blog.appspot.com",
  messagingSenderId: "437927390737",
  appId: "1:437927390737:web:a639c5261979b47d79cbb0",
  measurementId: "G-SRD9YFM8D1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
