import React from 'react';
import Planet from '../components/Planet';

import Moon from '../assets/images/moon.png';
import Sun from '../assets/images/sun.png';
import Mars from '../assets/images/mars.png';

import './AboutPage.css';

function AboutPage() {
  return (
    <>
      <div className='page'>
        <div className='planets-group'>
          <Planet 
            image={Moon}
            title='Guidance'
            paragraph=''
          />
          <Planet 
            image={Sun}
            title='Social'
            paragraph=''
          />
          <Planet 
            image={Mars}
            title='Learn'
            paragraph=''
          />
        </div>
      </div>
    </>
  )
}

export default AboutPage;