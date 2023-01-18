import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhWY05MrZ8Ll9C3XY4VNpllo0mugysm5k",
  authDomain: "simple-firebase-authenti-944be.firebaseapp.com",
  projectId: "simple-firebase-authenti-944be",
  storageBucket: "simple-firebase-authenti-944be.appspot.com",
  messagingSenderId: "636025591241",
  appId: "1:636025591241:web:99ac4cea5f1a8eeafa8418",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
