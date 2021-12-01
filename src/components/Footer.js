import React from 'react'

import { BsInstagram, BsTwitter, BsMailbox } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

import './Footer.css';

function Footer() {
  return (
    <>
      <div className='footer'>
        {/* <div classname ='links'>

        </div> */}
        <div className='social-section'>
          <a target="_blank" href="https://www.instagram.com/ap.stro/">
            <BsInstagram color='white' className='social-logos' size={40}/>
          </a>
          <a target="_blank" href="https://twitter.com/_apstro">
            <BsTwitter color='white' className='social-logos' size={40}/>
          </a>
          <a target="_blank" href="https://www.tiktok.com/@_apstro?">
            <FaTiktok color='white' className='social-logos' size={40}/>
          </a>
          <a target="_blank" href="mailto:help@apstro.app">
            <BsMailbox color='white' className='social-logos' size={40}/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
