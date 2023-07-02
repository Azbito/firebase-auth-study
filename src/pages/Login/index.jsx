import { useContext, useState } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { Navigate } from "react-router-dom";
import React from 'react'


export function Login() {
  const { isSigned, signInGoogle } = useContext(AuthGoogleContext)
  
  if (!isSigned) {
    return (
      <div>
        <b>Login</b>
        <button onClick={() => signInGoogle()}>Logar</button>
      </div>
    )
  }

  return <Navigate to="/" />
 
}