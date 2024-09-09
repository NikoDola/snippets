"use client"

import { signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth"
import { collection, getDoc, doc, getDocs, setDoc } from "firebase/firestore"
import {db} from '@/firebase'
import { auth , provider } from '@/firebase'
import { useState, useEffect, useContext, createContext  } from "react"

import Cookies from "js-cookie";

export const UserContext = createContext()

export function WrapUsers({children}){
    const [user, setUser] = useState(null)
    useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);

  });
  return () => unsubscribe();

}, []);

const signIn = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  setUser(user);

  // Create a reference to the document
  const userDocRef = doc(db, 'users', user.uid);

  // Set the document data
  await setDoc(userDocRef, {
      name: 'cane',
  });
  Cookies.set('user_id', user.uid, { expires: 7, path: '/' }); // Ensure path is '/'
  ; // The cookie expires in 7 days
}
const logOut = async () => {
  try {
    await signOut(auth);
    // Remove the cookie on logout
    Cookies.remove('user_id', { path: '/' }); // Ensure path is '/'
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

    return(
        <UserContext.Provider value={{user, signIn, logOut}}>
            {children}
        </UserContext.Provider>
    )

}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a WrapUsers provider");
  }
  return context;
}