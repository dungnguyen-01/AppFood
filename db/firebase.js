import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


const  firebaseConfig = {
  apiKey: "AIzaSyAtP3MOAziVq9TYlJaM8e86uhhKK-0fZvo",
  authDomain: "appfood-ae41d.firebaseapp.com",
  databaseURL: "https://appfood-ae41d-default-rtdb.firebaseio.com",
  projectId: "appfood-ae41d",
  storageBucket: "appfood-ae41d.appspot.com",
  messagingSenderId: "244010483280",
  appId: "1:244010483280:web:30cac7dcb8a1cf4b0edb55"
  };
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = firebase.auth();
const database = firebase.database();
const db = firebase.firestore();

export {firebase, auth , database, db};





