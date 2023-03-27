import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);

    const providerLogin = (provider) =>{
        setLoader(true);
        return signInWithPopup(auth, provider);
    }
 const logOut =()=>{
        setLoader(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser === null || currentUser.emailVerified){
                 setUser(currentUser);
            }
            setLoader(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[]);

    const createAccount =(email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const loginUser =(email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

   
    const updateUser =(name, photo)=>{
           return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            })
    }
    //email virify
    const verifyEmail=()=>{
       return sendEmailVerification(auth.currentUser)
    }
    const authInfo = {
        user,
        loader,
        setUser,
        providerLogin,
        createAccount,
        loginUser,
        updateUser,
        verifyEmail,
        setLoader,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;