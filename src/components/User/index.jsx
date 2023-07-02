import React, { useContext } from 'react'
import './style.scss'
import { AuthGoogleContext } from '../../contexts/authGoogle';

export function User() {
  const { user } = useContext(AuthGoogleContext)
  
  return (
    <div className="user-container">
      <img src={user?.photoURL} alt="Profile picture" />
      <b>{user?.displayName}</b>
      <p>{user?.email}</p>
    </div>
  )
}