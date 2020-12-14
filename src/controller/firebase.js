import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCH4clzIl7WhVrWNnzZ6FgFcOo9gusXGD8",
    authDomain: "adda-app-clone.firebaseapp.com",
    projectId: "adda-app-clone",
    storageBucket: "adda-app-clone.appspot.com",
    messagingSenderId: "1067161578442",
    appId: "1:1067161578442:web:5c2dfa886cbc0e494a7d33"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export{ auth, provider };
export default firebaseApp;

