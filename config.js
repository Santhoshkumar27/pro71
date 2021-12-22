import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBvINSElWjBSFUWjrSHi5shoBU0qrLf8BI",
    authDomain: "ride-bc773.firebaseapp.com",
    projectId: "ride-bc773",
    storageBucket: "ride-bc773.appspot.com",
    messagingSenderId: "271147314205",
    appId: "1:271147314205:web:520742204690a849196af4"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


