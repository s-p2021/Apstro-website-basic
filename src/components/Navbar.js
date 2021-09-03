import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { Button } from './Button'


function Navbar() {
  const [ click, setClick ] = useState(false);
  const [ button, setButton ] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <h1>logo here</h1>
          </Link>
          <div class="menu-icon" onClick={handleClick}>
            {click ? 'menu arrow down' : 'menu bars'}
          </div>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          </ul>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
          </ul>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/download' className='nav-links' onClick={closeMobileMenu}>
                Download
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
