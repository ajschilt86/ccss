import Rebase from "re-base";
import firebase from "firebase";
import {} from "dotenv/config";

const config = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID

  apiKey: "AIzaSyDT2uchkwruMbZksYczEmpGvAQImtolb8w",
  authDomain: "ccss-a276b.firebaseapp.com",
  databaseURL: "https://ccss-a276b.firebaseio.com",
  projectId: "ccss-a276b",
  storageBucket: "ccss-a276b.appspot.com",
  messagingSenderId: "717832613113"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { app, base, facebookProvider };
