import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-4 bg-light mt-auto">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between small">
          <div className="text-muted">Copyright &copy; Your Website 2022</div>
          <div>
            <NavLink to="#">Privacy Policy</NavLink>
            &middot;
            <NavLink to="#">Terms &amp; Conditions</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
