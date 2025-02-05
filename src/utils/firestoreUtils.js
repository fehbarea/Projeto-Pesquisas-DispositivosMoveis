import { initializeFirestore, collection, doc } from 'firebase/firestore';
import { app, auth_mod } from '../firebase/config';
import { onAuthStateChanged } from "firebase/auth";

const db = initializeFirestore(app, { experimentalForceLongPolling: true });

let userCollection = null;
let getReferenciaDoc = null;

onAuthStateChanged(auth_mod, (user) => {
  if (user) {

    userCollection = collection(db, "usuarios", auth_mod.currentUser.uid, "pesquisas");
    getReferenciaDoc = (id) => {
      return doc(db, "usuarios", auth_mod.currentUser.uid, "pesquisas", id);
    }
  } else {
    userCollection = null;
    getReferenciaDoc = null;
  }
});

export { userCollection, getReferenciaDoc }