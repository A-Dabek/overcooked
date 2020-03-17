import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2667ele7VF__hYFbAsE9zrBLiGK4dYPM",
  authDomain: "overcooked-f7055.firebaseapp.com",
  databaseURL: "https://overcooked-f7055.firebaseio.com",
  projectId: "overcooked-f7055",
  storageBucket: "overcooked-f7055.appspot.com",
  messagingSenderId: "438040213744",
  appId: "1:438040213744:web:624e4f3aa4a5854346ea35"
};

export class Firebase {
  private static instance: Firebase;
  static getInstance() {
    if (!Firebase.instance) Firebase.instance = new Firebase();
    return Firebase.instance;
  }

  db: firebase.firestore.Firestore;

  private constructor() {
    const app = firebase.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }
}
