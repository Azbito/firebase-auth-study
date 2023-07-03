import { NavLink } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from 'react'
import { GearSix, SignOut, User as UserIcon } from "phosphor-react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import './style.scss'
import { useClickOutside } from "../../hooks/useClickOutside";

export function Navbar() {
  const { localStorageUser, signOutGoogle } = useContext(AuthGoogleContext)
  const [isSettings, setIsSettings] = useState(false)
  const infosRef = useRef(null);

  useClickOutside(infosRef, () => setIsSettings(false))

  return (
    <div className="container-navbar">
      <NavLink to="/" className="logo">
        <strong>Journal</strong>
      </NavLink>
      <div>
      <div ref={infosRef} className="profile-container">
        <img src={localStorageUser?.photoURL} alt="Profile picture" onClick={() => setIsSettings(!isSettings)} />
        {isSettings && (
          <div className="options">
            <div className="option">
              <UserIcon className="icon" size={32} />
              <p>Profile</p>
            </div>
            <div className="option">
              <GearSix className="icon" size={32} />
              <p>Settings</p>
            </div>
            <div className="option" onClick={signOutGoogle}>
              <SignOut className="icon" size={32} />
              <p>Sign Out</p>
            </div>
          </div>
        )
      }
      </div>
      </div>
    </div>
  )
}