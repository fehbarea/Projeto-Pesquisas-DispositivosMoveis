import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBYK4z02EtNsjqImJ4kEmX5EJxne0vGR9s",
  authDomain: "satisfyingyou-17a83.firebaseapp.com",
  projectId: "satisfyingyou-17a83",
  storageBucket: "satisfyingyou-17a83.firebasestorage.app",
  messagingSenderId: "41631045424",
  appId: "1:41631045424:web:72493f163a8f0834a9daf5"
};

const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export { auth_mod, app }