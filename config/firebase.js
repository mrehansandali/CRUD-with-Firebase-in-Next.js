import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCtLhdMKHSzc-bdhSI6pnbKy8sFEP2nSdU",
    authDomain: "nextjscrud-16aed.firebaseapp.com",
    projectId: "nextjscrud-16aed",
    storageBucket: "nextjscrud-16aed.appspot.com",
    messagingSenderId: "833695319090",
    appId: "1:833695319090:web:94f603265e4de36a67682b",
    measurementId: "G-5JS1TCL1RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    collection,
    addDoc,
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteDoc
}