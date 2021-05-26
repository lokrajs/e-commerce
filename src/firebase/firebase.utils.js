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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
