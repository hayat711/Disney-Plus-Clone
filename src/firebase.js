import firebase from "firebase";

const firebaseConfig = {
      // process.env.FIREBASE_API_KEY
  apiKey:process.env.FIREBASE_API_KEY ,
  authDomain: "disneyplus-c6c06.firebaseapp.com",
  projectId: "disneyplus-c6c06",
  storageBucket: "disneyplus-c6c06.appspot.com",
  messagingSenderId: "292921386196",
  appId: "1:292921386196:web:173c491f5b45b02f2e0741",
  measurementId: "G-CYMFJ4Y35F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;




