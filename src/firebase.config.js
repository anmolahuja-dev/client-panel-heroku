import firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCym2pedb_JVj0bQpoP5z74BPV5vw3u39U",
    authDomain: "reactclientpanel-6ab87.firebaseapp.com",
    projectId: "reactclientpanel-6ab87",
    storageBucket: "reactclientpanel-6ab87.appspot.com",
    messagingSenderId: "825488684083",
    appId: "1:825488684083:web:032513dee38771bfee9f46",
    measurementId: "G-HNKDBMLFN7"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;