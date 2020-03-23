import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOo627JgwYs0oc1b81NDfy1RsrfVi9MdY",
    authDomain: "newsletter-f1706.firebaseapp.com",
    databaseURL: "https://newsletter-f1706.firebaseio.com",
    projectId: "newsletter-f1706",
    storageBucket: "newsletter-f1706.appspot.com",
    messagingSenderId: "630578407495",
    appId: "1:630578407495:web:adb74dc6b88bba31882962",
    measurementId: "G-MMT8BGDY37"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select-account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;