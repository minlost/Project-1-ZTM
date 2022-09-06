import { initializeApp } from 'firebase/app'
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
}   from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCsibp8d-XYd_RBt5vayNhofejskYlKcKc",
    authDomain: "ztm-project-db-b1b8b.firebaseapp.com",
    projectId: "ztm-project-db-b1b8b",
    storageBucket: "ztm-project-db-b1b8b.appspot.com",
    messagingSenderId: "761705735046",
    appId: "1:761705735046:web:33c65afd702556bf5c8207"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()){

      const { displayName, email } = userAuth
      const createdAt = new Date()
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        })
      } catch(error){
        console.log('error creating the user', error.mesage);
      }
    }
    return  userDocRef
  }



