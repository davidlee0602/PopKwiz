import firebase from 'firebase/app';
import 'firebase/auth';

// Used only by client
// const firebaseConfig = {
//   apiKey: 'AIzaSyAX0ztYQLBWaTdqizTHDcm7u6uBY6ECAGM',
//   authDomain: 'popkwiz.firebaseapp.com',
//   projectId: 'popkwiz',
//   databaseURL: 'https://popkwiz.firebaseio.com',
//   storageBucket: 'popkwiz.appspot.com',
//   messagingSenderId: '73392967405',
//   appId: '1:73392967405:web:2772dfe8e9cfe40676c6e4',
//   measurementId: 'G-DJPQDVGCWE',
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyAX0ztYQLBWaTdqizTHDcm7u6uBY6ECAGM",
//   authDomain: "popkwiz.firebaseapp.com",
//   // databaseURL: "https://popkwiz-default-rtdb.firebaseio.com",
//   projectId: "popkwiz",
//   storageBucket: "popkwiz.appspot.com",
//   messagingSenderId: "73392967405",
//   appId: "1:73392967405:web:e22ced14be27b5a776c6e4",
//   measurementId: "G-X1NK1D6WWK"
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAJbRRQTR0nmAefxqPoc9-KYZQP_PRCbrU',
  authDomain: 'popkwiz-2022.firebaseapp.com',
  projectId: 'popkwiz-2022',
  storageBucket: 'popkwiz-2022.appspot.com',
  messagingSenderId: '1012937248275',
  appId: '1:1012937248275:web:09436f18a49c47d70c79e6',
};

// moved firebase's config obj to kingdom_keys in order to group it with firestore's api key
export const app = firebase.initializeApp(firebaseConfig);

// auth is used in client/AuthContext.js
export const auth = app.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// Google provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
