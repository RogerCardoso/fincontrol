import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQYwfoOJhXnxDMVKMkbnTPP10LnlI6Duk",
    authDomain: "financial-control-simplified.firebaseapp.com",
    databaseURL: "https://financial-control-simplified.firebaseio.com",
    projectId: "financial-control-simplified",
    storageBucket: "financial-control-simplified.appspot.com",
    messagingSenderId: "356198195866",
    appId: "1:356198195866:web:9dbd7f1a8f632af05c7523",
    measurementId: "G-T8VMTT8BXY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;