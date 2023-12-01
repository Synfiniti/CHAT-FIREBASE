import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCppRZlwlSnnhEVJEzCZFIwtiEhBwNvhFc",
  authDomain: "chat-react-32c48.firebaseapp.com",
  projectId: "chat-react-32c48",
  storageBucket: "chat-react-32c48.appspot.com",
  messagingSenderId: "728269960008",
  appId: "1:728269960008:web:9f6d9aa4fe0111b5d1397d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
