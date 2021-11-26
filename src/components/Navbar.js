import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { BsFillTriangleFill } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';

import Logo from '../assets/images/logo.png';

import './Navbar.css';


function Navbar() {
  const [ click, setClick ] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <HashLink smooth to={"/"} className="navbar-logo">
            {/* <Image 
              src={Logo}
              alt='Apstro Logo'
            /> */}
          </HashLink>
          <div class="menu-icon" onClick={handleClick}>
            {click ? 
              <BsFillTriangleFill color='pink' size='35px'/> 
              : <FiMenu color='pink' size='35px'/> 
            }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink smooth to={'/home'} className='nav-links' onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to={'/about'} className='nav-links' onClick={closeMobileMenu}>
                About
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to={'/contactus'} className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to={'/download'} className='nav-links' onClick={closeMobileMenu}>
                Download
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
