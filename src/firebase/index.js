import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBA-ERc-3xKq-e7UuczvmhuZZHHN3Qbue0",
  authDomain: "bigmountain-21708.firebaseapp.com",
  projectId: "bigmountain-21708",
  storageBucket: "bigmountain-21708.appspot.com",
  messagingSenderId: "373086087158",
  appId: "1:373086087158:web:99cdb110c0456b68c849d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore()

  export default db;