// src/contexts/UserContext.js

"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { 
    signInWithPopup, 
    signOut as firebaseSignOut, 
    GoogleAuthProvider,
    onAuthStateChanged,
    setPersistence,
    browserSessionPersistence 
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { auth, provider, db } from "@/firebase"; 

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Check if user is authenticated
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userRef);

                if (!userDoc.exists()) {
                    await setDoc(userRef, { 
                        displayName: user.displayName, 
                        email: user.email 
                    });
                } 

                setUser(user);
            } else {
                console.error("User not authenticated after sign-in");
            }
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error during sign-out:", error);
        }
    };

    useEffect(() => {
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                const unsubscribe = onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        const userRef = doc(db, "users", user.uid);
                        const userDoc = await getDoc(userRef);

                        if (userDoc.exists()) {
                            setUser({ ...user, ...userDoc.data() }); 
                        } else {
                            console.error("User not found in Firestore"); 
                        }
                    } else {
                        setUser(null); 
                    }
                });

                return () => unsubscribe();
            })
            .catch((error) => {
                console.error("Error setting persistence:", error);
            });
    }, []); 

    return (
        <UserContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}