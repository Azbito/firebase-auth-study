import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import React from 'react'

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export function AuthGoogleProvider({children}) {
  const auth = getAuth(app);
  const [localStorageUser, setLocalStorageUser] = useState(null)
  const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
  const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
  const localStorageGetUserData = localStorage.getItem('UserInfos')
    
  const loadStoreAuth = () => {
    if (sessionToken && sessionUser && !localStorageUser) {
      setLocalStorageUser(JSON.parse(localStorageGetUserData))
  };
  }

  useEffect(() => {
    loadStoreAuth()
  }, [sessionToken, sessionUser, localStorageUser])

  function signInGoogle() {
    signInWithPopup(auth, provider)
    .then((result) => {
    const userData = result.user;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    sessionStorage.setItem("@AuthFirebase:token", token)
    sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(userData, null, 2))
    localStorage.setItem('UserInfos', JSON.stringify(userData))
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }

  function signOutGoogle() {
    sessionStorage.clear()
    localStorage.clear()
    window.location.href = '/login';
  }

  return (
    <AuthGoogleContext.Provider value={{
      signInGoogle, signOutGoogle, isSigned: !!localStorageUser, localStorageUser
    }}>
      {children}
    </AuthGoogleContext.Provider>
  )
}