import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCno2NNkzt3gLdC4CfZ4TlhwESQJgI_IXk",
  authDomain: "test-login2-e4c7f.firebaseapp.com",
  projectId: "test-login2-e4c7f",
  storageBucket: "test-login2-e4c7f.firebasestorage.app",
  messagingSenderId: "698181085162",
  appId: "1:698181085162:web:3b91954eb1779a05894cd2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  where
};