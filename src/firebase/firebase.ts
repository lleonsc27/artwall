import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqG2VUL_oh-ID_zcBdAsQiTzYMezPshoM",
  authDomain: "artwall-coder.firebaseapp.com",
  projectId: "artwall-coder",
  storageBucket: "artwall-coder.appspot.com",
  messagingSenderId: "85308851113",
  appId: "1:85308851113:web:1d1c44cc12cda73f363ab8",
  measurementId: "G-TZLDY05KVS"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
export const db = getFirestore(app);

// Inicializa o Firebase Storage
export const storage = getStorage(app);
