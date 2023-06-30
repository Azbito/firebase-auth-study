import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export function AuthGoogleProvider({children}) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user")

      if (sessionToken && sessionUser) {
        setUser(sessionUser)
      }
    };

    loadStoreAuth()
  }, [])

  function signInGoogle() {
    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    setUser(user)
    sessionStorage.setItem("@AuthFirebase:token", token)
    sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }

  function signOutGoogle() {
    sessionStorage.clear()
    setUser(null)

    return <Navigate to="/login" />
  }

  return (
    <AuthGoogleContext.Provider value={{
      signInGoogle, signOutGoogle, signed: !!user, setUser, user
    }}>
      {children}
    </AuthGoogleContext.Provider>
  )
}