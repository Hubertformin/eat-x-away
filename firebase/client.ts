import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCIaBLr6i4Bs0nB5TFacmWBxCMAbkyn5yU",
    authDomain: "go-eat-away.firebaseapp.com",
    databaseURL: "https://go-eat-away.firebaseio.com",
    projectId: "go-eat-away",
    storageBucket: "go-eat-away.appspot.com",
    messagingSenderId: "466602074889",
    appId: "1:466602074889:web:de2d29247e77fe534d69d8",
    // measurementId: "G-CK7RMT6LHB"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.error(e);
}

export default firebase;