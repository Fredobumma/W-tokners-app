import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./httpService";

const provider = new GoogleAuthProvider();

const token = async () => await auth.currentUser.getIdToken(true);

const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const signIn = () => signInWithEmailAndPassword(auth, email, password);

const onAuthChange = onAuthStateChanged(auth, (user) => user);

const result = await signInWithPopup(auth, provider);
const credential = GoogleAuthProvider.credentialFromResult(result);
// console.log(credential);
// console.log(result.user);

export { token, signUp, signIn, onAuthChange, credential, result };
