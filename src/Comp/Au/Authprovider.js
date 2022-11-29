

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing')
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe();

    }, [])


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signinWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }


    const authinfo = {

        createUser,
        signinWithEmailPass,
        user,
        logOut,
        updateUser,
        providerLogin,

    }



    return (
        <AuthContext.Provider value={authinfo}>
            {children}

        </AuthContext.Provider>
    );
};