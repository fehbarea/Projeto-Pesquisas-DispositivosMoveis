import { initializeFirestore, collection, doc } from 'firebase/firestore';
import { app, auth_mod } from '../firebase/config';
import { onAuthStateChanged } from "firebase/auth";

const db = initializeFirestore(app, { experimentalForceLongPolling: true });

// let userCollection = null;
// let getReferenciaDoc = null;

// onAuthStateChanged(auth_mod, async (user) => {
  
//   if ((auth_mod.currentUser) && typeof auth_mod.currentUser === 'object') {
//     console.log("entrou funcao onAuthStateChanged ")
//     userCollection = collection(db, "usuarios", auth_mod.currentUser.uid, "pesquisas");
//     getReferenciaDoc = (id) => {
//       return doc(db, "usuarios", auth_mod.currentUser.uid, "pesquisas", id);
//     }
//   } 
//   else {
//     userCollection = null;
//     getReferenciaDoc = null;
//   }
// });

const userCollection = (uid) => {
  return collection(db, "usuarios", uid, "pesquisas");
};

const getReferenciaDoc = (uid, id) => {
  return doc(db, "usuarios", uid, "pesquisas", id);
};

export { userCollection, getReferenciaDoc }