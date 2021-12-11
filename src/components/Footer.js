import React from 'react';
import Iubenda from 'react-iubenda-policy';
import styled from 'styled-components';

import { BsInstagram, BsTwitter, BsMailbox } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

import './Footer.css';

const Text = styled.div`
  font-size: 1rem;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 200;
  align-text: center;
  color: white;
  width: 175px;
  margin: 1.5rem;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    margin: 0.25rem 
  }
`

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className ='links'>
          <Text>© 2021 apstro LTD </Text>
          <Iubenda id={90499811} type='terms-and-conditions' styling='nostyle'>
            <Text>terms and conditions</Text>
          </Iubenda>
          <Iubenda id={90499811} type='privacy' styling='nostyle'>
            <Text>privacy policy</Text>
          </Iubenda>
          <Iubenda id={90499811} type='cookie' styling='nostyle'>
            <Text>cookie policy</Text>
          </Iubenda>
        </div>
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
