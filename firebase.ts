import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-P4I1QlDYeAelKnlNRzWK8HQcmql86ug",
  authDomain: "chatgpt-messenger-89661.firebaseapp.com",
  projectId: "chatgpt-messenger-89661",
  storageBucket: "chatgpt-messenger-89661.appspot.com",
  messagingSenderId: "431680804272",
  appId: "1:431680804272:web:09636994e00dca94ac3275"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
