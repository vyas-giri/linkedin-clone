import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB6RKZSPXeM4B1P7Omi7yJGcOgjGglT3R0",
    authDomain: "linkedin-clone-8e5b2.firebaseapp.com",
    projectId: "linkedin-clone-8e5b2",
    storageBucket: "linkedin-clone-8e5b2.appspot.com",
    messagingSenderId: "187027665043",
    appId: "1:187027665043:web:ceadf53eb1245e4a86dd66"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };