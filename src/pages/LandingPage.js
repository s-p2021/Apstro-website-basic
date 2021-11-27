import React from 'react'
import Hero from '../components/Hero';
import DownloadHero from '../components/DownloadHero'
import { AnimatedBg, Transition } from 'scroll-background';


function LandingPage() {
  return (
    <>
      <AnimatedBg>
        <Transition from="#000000" to="#000000" position={0.75} />
          <Hero id='home'/>
        <Transition from="#000000" to="#5c8bfb" position={0.75} >
          <DownloadHero id='about'/>
        </Transition>
        <Transition height="100vh" from="#5c8bfb" to="#f097b2" position={0.75} >
          <DownloadHero id='about'/>
        </Transition>
        <Transition height="100vh" from="#f097b2" to="#ffe8a2" position={0.75} >
          <DownloadHero id='about'/>
        </Transition>
      </AnimatedBg>
    </>
  )
}

export default LandingPage