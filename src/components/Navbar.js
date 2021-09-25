import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'
import { BsFillTriangleFill } from 'react-icons/bs'

import './Navbar.css';


function Navbar() {
  const [ click, setClick ] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <h1>logo here</h1>
          </Link>
          <div class="menu-icon" onClick={handleClick}>
            {click ? 
              <BsFillTriangleFill color='pink' size='35px'/> 
              : <FiMenu color='pink' size='35px'/> 
            }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
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
