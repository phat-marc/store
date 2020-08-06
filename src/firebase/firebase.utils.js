import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCRqXYXlxGLj6vmoOaVoR1aR0tEje3gQbo",
  authDomain: "le-pet-store.firebaseapp.com",
  databaseURL: "https://le-pet-store.firebaseio.com",
  projectId: "le-pet-store",
  storageBucket: "le-pet-store.appspot.com",
  messagingSenderId: "889804565092",
  appId: "1:889804565092:web:922966a3267072d1530d71",
  measurementId: "G-LFHWMX8KF7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// triggers the google pop up - can add more
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
