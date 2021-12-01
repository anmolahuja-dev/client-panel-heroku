import {createStore,combineReducers,compose} from 'redux';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {firebaseReducer, reactReduxFirebase} from 'react-redux-firebase';
import { reduxFirestore,firestoreReducer } from 'redux-firestore';
//Reducers
//@todo

const firebaseConfig = {
    apiKey: "AIzaSyCym2pedb_JVj0bQpoP5z74BPV5vw3u39U",
    authDomain: "reactclientpanel-6ab87.firebaseapp.com",
    projectId: "reactclientpanel-6ab87",
    storageBucket: "reactclientpanel-6ab87.appspot.com",
    messagingSenderId: "825488684083",
    appId: "1:825488684083:web:032513dee38771bfee9f46",
    measurementId: "G-HNKDBMLFN7"
};

//react-redux firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
  }

//Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init Firestore
const firestore= firebase.firestore();


// // Add reactReduxFirebase enhancer when making store creator
// const createStoreWithFirebase=compose(
//     reactReduxFirebase(firebase,rrfConfig),
//     reduxFirestore(firebase)
// )(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  });

// Create store with reducers and initial state
const initialState = {}
const store = createStore(
    rootReducer,
    initialState,
    compose(
        reactReduxFirebase(firebase, rrfConfig), // pass in firebase instance instead of config
        reduxFirestore(firebase), // <- needed if using firestore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
