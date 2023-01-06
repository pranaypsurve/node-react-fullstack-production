import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <NavLink to='/' className="navbar-brand ps-3">Pranay Dashboard</NavLink>
      <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
          <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
        </div>
      </form>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <NavLink to='#' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></NavLink>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><NavLink to='#' className="dropdown-item" >Settings</NavLink></li>
            <li><NavLink to='#' className="dropdown-item" >Activity Log</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink to='#' className="dropdown-item" >Logout</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
