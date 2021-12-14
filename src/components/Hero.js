import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Moon from '../assets/images/squiglyplanets/green.png';
import Mercury from '../assets/images/gradientplanets/jupiter.png';
import Uranus from '../assets/images/gradientplanets/venus.png';
import Venus from '../assets/images/squiglyplanets/pink.png';
import CustomButton from './CustomButton';


const Section = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height 100vh;
  padding: 3rem calc((100vw - 1300px) /2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  h1 {
    font-size: 6rem;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 200;
    align-text: center;
  }

  p {
    margin: 2rem 0;
    font-size: 2rem;
    line-height: 1.1;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 100;
    text-align: center;
    align-self: center;
    padding: 1rem 0.5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
    margin-top: 20px;

    h1 {
      font-size: 4.2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;


const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height 100%;
  max-width: 275px;
  max-height: 275px;

  @media screen and (max-width: 768px) {
    max-width: 130px;
    max-height: 130px;
    width: 100%;
    height 100%;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
  margin-top: 15px;


  ${Image}:nth-child(1) {
    top: 20px;
    left: 60px;
  }
  ${Image}:nth-child(2) {
    top: 100px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 315px;
    left: 100px;
  }
  ${Image}:nth-child(4) {
    top: 300px;
    right: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 80px;

    ${Image}:nth-child(1) {
      top: 0px;
      left: 0
    }
    ${Image}:nth-child(2) {
      top: 125px;
      left: 1
    }
    ${Image}:nth-child(3) {
      top: 250px;
      left: 0
    }
    ${Image}:nth-child(4) {
      top: 375px;
      left: 3
    }
  }
`;

export const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100},
    visible: { opacity: 1, x: 0 }
  }

  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              apstro
            </motion.h1>
            <motion.p
              variants={fadeLeft}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1 }}
            >
              personalised guidance powered by the planets
            </motion.p>
            <CustomButton 
              title='Download Now'
            />
          </ColumnLeft>
          <ColumnRight>
            <Image 
              src={Moon} 
              alt='Moon' 
              whileTap={{ scale: 0.9}} 
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50}}
              initial={{opacity: 0, y: -100}}
              animate={{opacity: 1, y: 0, transition: {duration: 1.5}}}
              whileHover={{ scale: 1.1, transition: {duration: 0.5} }}
            />
            <Image 
              src={Mercury} 
              alt='Mercury' 
              whileTap={{ scale: 0.6}} 
              drag={true}
              dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50}}
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0, transition: {duration: 1.5}}}
              whileHover={{ scale: 1.1, transition: {duration: 0.5} }}
            />
            <Image 
              src={Uranus} 
              alt='Uranus' 
              whileTap={{ scale: 0.9}} 
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50}}
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0, transition: {duration: 1.5}}}
              whileHover={{ scale: 1.1, transition: {duration: 0.5} }}
            />
            <Image 
              src={Venus} 
              alt='Venus' 
              whileTap={{ scale: 0.9}}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0}}
              initial={{opacity: 0, y: 100}}
              animate={{opacity: 1, y: 0, transition: {duration: 1.5}}}
              whileHover={{ scale: 1.1, transition: {duration: 0.5} }}
            />
          </ColumnRight>
        </Container>
      </Section>
    </>
  )
}

export default Hero;