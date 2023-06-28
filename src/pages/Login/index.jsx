import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../services/firebaseConfig";
import { useState } from "react";

const provider = new GoogleAuthProvider();

export function Login() {
  const auth = getAuth(app);
  const [user, setUser] = useState([])

  function signInGoogle() {
    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user.photoURL)
    setUser(user)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }

  return (
    <div>
      <b>Login</b>
      <button onClick={signInGoogle}>Logar</button>
      <div>
        {user && (
          <>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
          </>

        )}
      </div>
    </div>
  )
}