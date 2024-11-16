import React, { useState } from 'react';
import './AboutNavbar.css';
import logo from '/src/assets/logo.png';

const AboutNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='aboutNavbar-container'>
            <div className='aboutNavbarLeft-content'>
                <img className='navbar-Logo' src={logo} alt="Logo" />
            </div>

            {/* <div className='aboutNavbarMain-options'>
                <ul>
                    <li>Menu</li>
                </ul>
            </div> */}

            {/* <div className='toggleHamburger'> */}
            <div className='hamburger' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <div className={`aboutNavbarRight-content ${isMenuOpen ? 'show' : ''}`}>
  
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                </ul>
                    <button className='aboutNavbar-btn'>Support</button>
            </div>
            {/* </div> */}

        </div>
    );
};

export default AboutNavbar;
