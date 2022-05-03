import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHC79N7IckOyr7Y69YIEpZN0rAhEWh-OI",
    authDomain: "invoice-app-pv-415e1.firebaseapp.com",
    projectId: "invoice-app-pv-415e1",
    storageBucket: "invoice-app-pv-415e1.appspot.com",
    messagingSenderId: "81801759997",
    appId: "1:81801759997:web:f96aea1301f00cd76f0294"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();