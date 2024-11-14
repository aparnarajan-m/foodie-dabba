import React from 'react'
import './AboutNavbar.css'
import logo from '/src/assets/logo.png'

const AboutNavbar = () => {
    return (
        <div className='aboutNavbar-container'>
            <div className='aboutNavbarLeft-content'>
                <img className='navbar-Logo' src={logo} alt="" />
            </div>
            <div className='aboutNavbarRight-content'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                </ul>
                <button className='aboutNavbar-btn'>Support</button>
            </div>
        </div>
    )
}

export default AboutNavbar

