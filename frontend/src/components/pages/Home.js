import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>Home <NavLink to='admin'>Dashboard</NavLink></div>
  )
}
