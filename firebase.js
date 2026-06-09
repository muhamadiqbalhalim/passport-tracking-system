import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    doc,
    query,
    where,
    onSnapshot,
    orderBy
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getStorage,
    ref,
    uploadString,
    getDownloadURL
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


const firebaseConfig = {
    apiKey: "AIzaSyCno2NNkzt3gLdC4CfZ4TlhwESQJgI_IXk",
    authDomain: "test-login2-e4c7f.firebaseapp.com",
    projectId: "test-login2-e4c7f",
    storageBucket: "test-login2-e4c7f.firebasestorage.app",
    messagingSenderId: "698181085162",
    appId: "1:698181085162:web:3b91954eb1779a05894cd2"
};

const app =
    initializeApp(
        firebaseConfig
    );


// =========================
// FIRESTORE
// =========================

export const db =
    getFirestore(app);


// =========================
// AUTH
// =========================

export const auth =
    getAuth(app);


// =========================
// STORAGE
// =========================

export const storage =
    getStorage(app);


// =========================
// EXPORTS
// =========================

export {

    collection,
    addDoc,
    getDocs,
    updateDoc,
    doc,
    query,
    where,

    onSnapshot,
    orderBy,

    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

    ref,
    uploadString,
    getDownloadURL

};