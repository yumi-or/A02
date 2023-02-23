import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyASTSMNxxbVzYQHJvZ4Bdto3z7T66JJ2ME",
    authDomain: "test-product-search-interns.firebaseapp.com",
    databaseURL: "https://test-product-search-interns-default-rtdb.firebaseio.com",
    projectId: "test-product-search-interns",
    storageBucket: "test-product-search-interns.appspot.com",
    messagingSenderId: "1097004247987",
    appId: "1:1097004247987:web:fb937a431524a1fc8879c6",
    measurementId: "G-NEJFMH7CYN"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);