// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import axios from "axios";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const {
  REACT_APP_API_KEY,
  REACT_APP_API_URL,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = process.env;
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_API_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};

// <--------- Initialize Firebase --------->
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
const auth = getAuth(app);
const db = getFirestore(app);

// <--------- C-R-U-D Operations --------->
const setData = (document, _id, data) =>
  setDoc(doc(db, document, _id), data, { merge: true });

const getData = (document, _id) => getDoc(doc(db, document, _id));

const deleteData = (document, _id) => deleteDoc(doc(db, document, _id));

const httpRequest = axios.request;

export { auth, getData, setData, deleteData, httpRequest };
