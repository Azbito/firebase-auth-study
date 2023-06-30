import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"

export function Home() {
  const { user, signOutGoogle } = useContext(AuthGoogleContext)

  const userInfo = user || null;

  return (
    <>
    <b>Home</b>
    <div>
      <img src={userInfo?.photoURL} alt="Profile picture" />
      <p>{userInfo.displayName}</p>
      <p>{userInfo.email}</p>
      <button onClick={() => signOutGoogle()}>Logout</button>
    </div>
    </>
  )
}