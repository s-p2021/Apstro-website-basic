import React from 'react'
import Hero from '../components/heroComponents/Hero';
import DownloadHero from '../components/heroComponents/DownloadHero'
import { AnimatedBg, Transition } from 'scroll-background';
import AboutHero from '../components/heroComponents/AboutHero';
import Footer from '../components/heroComponents/Footer';
import Navbar from '../components/heroComponents/Navbar';

function LandingPage() {
  return (
    <>
      <AnimatedBg>
        <Navbar />
        <Transition from="#000000" to="#000000" position={0.75} />
          <div id='home'>
            <Hero />
          </div>
        <Transition from="#000000" to="#5c8bfb" position={0.75} >
          <div id='download'>
            <DownloadHero/>
          </div>
        </Transition>
        <Transition from="#5c8bfb" to="#f097b2" position={0.75} >
          <div id='about'>
            <AboutHero/>
          </div>
          <Footer />
        </Transition>
        {/* <Transition height="100vh" from="#f097b2" to="#ffe8a2" position={0.75} >
          <DownloadHero id='about'/>
        </Transition> */}
      </AnimatedBg>
    </>
  )
}

export default LandingPage