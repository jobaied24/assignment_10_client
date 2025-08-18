import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const provider = new GoogleAuthProvider();

    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInGoogle=()=>{
        return signInWithPopup(auth,provider);
    }

    // current user
     useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser);
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
        userSignOut
    }
    return (
       <AuthContext value={userInfo}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;