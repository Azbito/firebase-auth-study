import React from 'react'
import { User } from "../../components/User"
import './style.scss'
import { Services } from "../../components/Services"

export function Home() {


  return (
    <div className="home-container">
    <div className="banner">
      <User />
    </div>
      <Services />
      <br />
      <br />
      <br />
    </div>
  )
}