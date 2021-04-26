import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDCQBCef4DZYHsm0qjaBKH990ovL8kKx0",
    authDomain: "linkedin-clone-3c3dc.firebaseapp.com",
    projectId: "linkedin-clone-3c3dc",
    storageBucket: "linkedin-clone-3c3dc.appspot.com",
    messagingSenderId: "494630948204",
    appId: "1:494630948204:web:1396e7df23aa20f31bf749",
    measurementId: "G-CVG1XWCZW1"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth}