import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../../firebase.init';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const provider = new GoogleAuthProvider();

    const signInGoogle=()=>{
        return signInWithPopup(auth,provider);
    }
    const userInfo={
        createUser,
        signInGoogle
    }
    return (
       <AuthContext value={userInfo}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;