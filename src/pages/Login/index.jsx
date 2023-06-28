import { useContext, useState } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";


export function Login() {
  const { signInGoogle, user } = useContext(AuthGoogleContext)
  

  return (
    <div>
      <b>Login</b>
      <button onClick={() => signInGoogle()}>Logar</button>
      <div>
        {user && (
          <>
          <b>{user.displayName}</b>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
          </>
        )}
      </div>
    </div>
  )
}