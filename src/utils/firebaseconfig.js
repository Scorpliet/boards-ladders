// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDf2fJSYw8HwxE6BBtFe2JWe4yoGypxXew",
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for
  // this URL must be whitelisted in the Firebase Console.
  url: "http://localhost:3000",
  // This must be true for email link sign-in.
  handleCodeInApp: false,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  // FDL custom domain.
  dynamicLinkDomain: "https://boardandtables.page.link/cs2d",
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(fireapp);

export { db, auth, actionCodeSettings };
export { fireapp };
