import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="main-navbar">
      <div className="nav-left">
        <img src="src/assets/logo.png" alt="logo" />
      </div>
      <div className="nav-right">
       <li>Home</li>
       <li>About</li>
       <li className='nav-menu'>Menu</li>
       <button className='nav-button'>Support</button>
      </div>
    </div>
    </>
  )
}

export default Navbar