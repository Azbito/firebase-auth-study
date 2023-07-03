import React from 'react'
import './style.scss'
export function Card({icon, title, description, className}) {
  return (
    <div className={`card-container ${className}`}>
      <div className="icon-container">{icon}</div>
      <div className='info-container'>
        <b>
          {title}
        </b>
        <p>{description}</p>
      </div>
    </div>
  )
}