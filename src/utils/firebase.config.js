import firebase from "firebase/compat/app";
import "firebase/compat/auth"; //pour l'authentification

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: "react-firebase-redux-13dd4.firebaseapp.com",
  projectId: "react-firebase-redux-13dd4",
  storageBucket: "react-firebase-redux-13dd4.appspot.com",
  messagingSenderId: "890591110451",
  appId: "1:890591110451:web:370637cdd2bd911462ca46"
});

export const auth = app.auth();
export default app;
