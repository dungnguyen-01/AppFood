import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAtP3MOAziVq9TYlJaM8e86uhhKK-0fZvo",
    authDomain: "appfood-ae41d.firebaseapp.com",
    projectId: "appfood-ae41d",
    storageBucket: "appfood-ae41d.appspot.com",
    messagingSenderId: "244010483280",
    appId: "1:244010483280:web:30cac7dcb8a1cf4b0edb55"
  };
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;