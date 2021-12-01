import React from 'react'
import Hero from '../components/Hero';
import DownloadHero from '../components/DownloadHero'
import { AnimatedBg, Transition } from 'scroll-background';
import AboutHero from '../components/AboutHero';

function LandingPage() {
  return (
    <>
      <AnimatedBg>
        <Transition from="#000000" to="#000000" position={0.75} />
          <div id='home'>
            <Hero />
          </div>
        <Transition from="#000000" to="#5c8bfb" position={0.75} >
          <div id='download'>
            <DownloadHero/>
          </div>
        </Transition>
        <Transition height="100vh" from="#5c8bfb" to="#f097b2" position={0.75} >
          <div id='about'>
            <AboutHero/>
          </div>
        </Transition>
        {/* <Transition height="100vh" from="#f097b2" to="#ffe8a2" position={0.75} >
          <DownloadHero id='about'/>
        </Transition> */}
      </AnimatedBg>
    </>
  )
}

export default LandingPage