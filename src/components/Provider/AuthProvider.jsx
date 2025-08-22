import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const provider = new GoogleAuthProvider();

    const userLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    // current user
     useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser);
          setLoading(false);
        });
        return unsubscribe;
     },[])
     
    // sign out
    const userSignOut=()=>{
        return signOut(auth);
    }

    const userInfo={
        createUser,
        signInGoogle,
        userLogin,
        user,
        userSignOut,
        loading,
        setLoading
    }
    return (
       <AuthContext value={userInfo}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;