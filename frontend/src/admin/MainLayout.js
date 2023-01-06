import React , {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import '../assets/admin/css/styles.css'
import '../assets/admin/js/scripts.js'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function MainLayout() {
  useEffect(()=>{
    
  })
  return (
    <div className='sb-nav-fixed'>
        <Navbar />
        <div id="layoutSidenav">
            <Sidebar />

            <div id="layoutSidenav_content">
                <main>
                    <Outlet/>
                </main>
                <Footer />
            </div>
        </div>
    </div>
  )
}
