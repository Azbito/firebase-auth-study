import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { AuthGoogleContext } from '../../contexts/authGoogle';

export function User() {
  const { localStorageUser } = useContext(AuthGoogleContext)
  console.log(localStorageUser)
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  return (
    <div className="user-container">
      { randomNumber === 1 && <b>Welcome</b>}
      { randomNumber === 2 && <b className="glad">Glad to see you again</b>}
      { randomNumber === 3 && <b>Howdy!</b>}
      {localStorageUser ?
      <img src={localStorageUser?.photoURL} alt="Profile picture" /> :
      <p>asdasd</p>
      }
      <p>{localStorageUser?.displayName}</p>
    </div>
  )
}