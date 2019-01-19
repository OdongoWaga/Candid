import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage"; 


var config = {
    apiKey: "AIzaSyC32d1SosJdLz8Nr5n7pu-ISVYol9GSUJo",
    authDomain: "candid-de823.firebaseapp.com",
    databaseURL: "https://candid-de823.firebaseio.com",
    projectId: "candid-de823",
    storageBucket: "gs://candid-de823.appspot.com/",
    messagingSenderId: "361956061860"
  };
  firebase.initializeApp(config);

  export default firebase; 