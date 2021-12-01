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
        <div className='social-logos'>
          <BsInstagram color='white' size={60}/>
          <BsTwitter color='white' size={60}/>
          <FaTiktok color='white' size={60}/>
          <BsMailbox color='white' size={60}/>
        </div>
      </div>
    </>
  )
}

export default Footer
