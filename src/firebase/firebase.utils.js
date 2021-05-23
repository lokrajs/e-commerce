import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB4nYJqsWva7ROnQuiEQL6kNh53QbLyj8Q",
    authDomain: "e-commerce-db-64dc6.firebaseapp.com",
    projectId: "e-commerce-db-64dc6",
    storageBucket: "e-commerce-db-64dc6.appspot.com",
    messagingSenderId: "90786807211",
    appId: "1:90786807211:web:7ec3bb0cc978459855e6ee",
    measurementId: "G-75DLDKGPZT"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;