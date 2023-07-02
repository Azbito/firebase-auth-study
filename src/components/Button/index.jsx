import './style.scss'
import React from 'react'

export function Button({title, onClick}) {
  return (
    <button onClick={onClick}>{title}</button>
  )
}