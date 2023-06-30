import { useContext, useState } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { Navigate } from "react-router-dom";


export function Login() {
  const { signed, signInGoogle } = useContext(AuthGoogleContext)
  
  if (!signed) {
    return (
      <div>
        <b>Login</b>
        <button onClick={() => signInGoogle()}>Logar</button>
      </div>
    )
  }

  return <Navigate to="/" />
 
}