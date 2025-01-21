
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBchUnpVzU55XAfsDAWlf9W6KjLxd2bvww",
  authDomain: "gorilla-test-54dd0.firebaseapp.com",
  projectId: "gorilla-test-54dd0",
  storageBucket: "gorilla-test-54dd0.firebasestorage.app",
  messagingSenderId: "517936723867",
  appId: "1:517936723867:web:1c2657bd05524f8558533e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setting up image creation
const imgDB = getStorage(app);
const uploadDB = getFirestore(app);

export {imgDB, uploadDB};