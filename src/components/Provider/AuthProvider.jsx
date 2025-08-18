import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../../firebase.init';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

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
    const userInfo={
        createUser,
        signInGoogle,
        userLogin
    }
    return (
       <AuthContext value={userInfo}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;