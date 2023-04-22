import {
  createUserWithEmailAndPassword,
  // GoogleAuthProvider,
  // onAuthStateChanged,
  signInWithEmailAndPassword,
  // signInWithPopup,
} from "firebase/auth";
import { auth } from "./httpService";

const tokenKey = "token";

// const provider = new GoogleAuthProvider();

const getJwt = () => localStorage.getItem(tokenKey);

const loginWithJwt = (value) => localStorage.setItem(tokenKey, value);

const logoutJwt = () => localStorage.removeItem(tokenKey);

// const token = () => auth.currentUser.getIdToken(true);

const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// const onAuthChange = onAuthStateChanged(auth, (user) => user);

// const result = signInWithPopup(auth, provider);
// const credential = GoogleAuthProvider.credentialFromResult(result);
// console.log(credential);
// console.log(result.user);

export { getJwt, loginWithJwt, logoutJwt, signUp, signIn };
