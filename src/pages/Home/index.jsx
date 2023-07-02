import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import React from 'react'
import { User } from "../../components/User"
import './style.scss'
import { Button } from "../../components/Button"

export function Home() {
  const { signOutGoogle } = useContext(AuthGoogleContext)

  return (
    <div className="home-container">
    <b>Home</b>
      <User />
      <Button onClick={() => signOutGoogle()} title="Sign out" />
    </div>
  )
}