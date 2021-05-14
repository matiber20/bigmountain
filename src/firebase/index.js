import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCM9PMqRfSS5F5OGhRTJIkBs6PNDxFYwuo",
    authDomain: "bigmountain-2d30e.firebaseapp.com",
    projectId: "bigmountain-2d30e",
    storageBucket: "bigmountain-2d30e.appspot.com",
    messagingSenderId: "270217325301",
    appId: "1:270217325301:web:fb52e406052a7d9e50b3bc",
    measurementId: "G-02WYLXK0TE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore()

  export default db;