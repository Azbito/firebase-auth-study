import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { Navigate } from "react-router-dom";
import React from 'react'

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export function AuthGoogleProvider({children}) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
  const sessionUser = sessionStorage.getItem("@AuthFirebase:user")

  const loadStoreAuth = () => {
    if (sessionToken && sessionUser && !user) {
      setUser(JSON.parse(sessionUser));
    }
  };

  useEffect(() => {
    loadStoreAuth()
  }, [sessionToken, sessionUser, user])

  function signInGoogle() {
    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const userData = result.user;
    setUser(userData)

    sessionStorage.setItem("@AuthFirebase:token", token)
    sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(userData, null, 2))
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }

  function signOutGoogle() {
    sessionStorage.clear()
    window.location.href = '/login';
  }

  return (
    <AuthGoogleContext.Provider value={{
      signInGoogle, signOutGoogle, isSigned: !!user, setUser, user
    }}>
      {children}
    </AuthGoogleContext.Provider>
  )
}