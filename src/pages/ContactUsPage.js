import React from 'react'

import './ContactUsPage.css'
import Planet from '../components/Planet.js'

import tiktok from '../assets/images/tiktok.jpeg'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'

function ContactUsPage() {
  return (
    <>
      <div className='page'>
        <h1 className='title'>Contact Us!</h1>
        <div className='planets-group'>
          <Planet 
            image={tiktok}
            paragraph='@ap.stro'
          />
          <Planet 
            image={twitter}
            paragraph='@ap.stro'
          />
          <Planet 
            image={instagram}
            paragraph='@ap.stro'
          />
        </div>
      </div>
    </>
  )
}

export default ContactUsPage;