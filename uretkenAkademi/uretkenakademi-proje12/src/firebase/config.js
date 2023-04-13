// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiiYGX3UYX6gJsHGSeggChW9NPYLfWjnQ",
  authDomain: "artgallery-88ed9.firebaseapp.com",
  projectId: "artgallery-88ed9",
  storageBucket: "artgallery-88ed9.appspot.com",
  messagingSenderId: "297269793810",
  appId: "1:297269793810:web:dece120b6ea41d1f8834cb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
