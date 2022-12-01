// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged} 
        from "firebase/auth"
import {getFirestore,
        doc,
        getDoc,
        setDoc} from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyCvL1RF9pzJFGDBNHBMnF34hpPdkzP_4Vo",

  authDomain: "crwn-db-76fed.firebaseapp.com",

  projectId: "crwn-db-76fed",

  storageBucket: "crwn-db-76fed.appspot.com",

  messagingSenderId: "470812623635",

  appId: "1:470812623635:web:0017365c5be3bc6d3090e6",

  measurementId: "G-H2VPBRYTT4"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const db = getFirestore();

export const createUserDocumentFromAuth =  async (userAuth, moreInfo={}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...moreInfo
      })
    } catch(error) {
      console.log(error)
    }
  } else {
    return userDocRef;
  }
  // if userdata exists return userDocRef
  // create/set document with data from userauth in collection
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password)
}

export const SignOutUser = async () => {
   await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => { 
  if (!callback) return;
  
  onAuthStateChanged(auth, callback)

}