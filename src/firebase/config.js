import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const app=firebase.initializeApp({
     apiKey: "AIzaSyC_dafw8Pk7TngMM943Mt6HkZwWHzBHGUU",
    authDomain: "pursuit-4450f.firebaseapp.com",
    projectId: "pursuit-4450f",
    storageBucket: "pursuit-4450f.appspot.com",
    messagingSenderId: "225199808286",
    appId: "1:225199808286:web:e347989a301e538cbdf30f"
})
 
  export const provider = new firebase.auth.GoogleAuthProvider();
export const auth=app.auth()
export const firestore=app.firestore()



