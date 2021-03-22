// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAlfj9YYm_sUNFA56dLmbWpfEBcIV-EhvA",
    authDomain: "facebook-clone0.firebaseapp.com",
    projectId: "facebook-clone0",
    storageBucket: "facebook-clone0.appspot.com",
    messagingSenderId: "939235300920",
    appId: "1:939235300920:web:e03a7dce2cb368cbbdf8cd",
    measurementId: "G-DKXGT4Z6XT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;