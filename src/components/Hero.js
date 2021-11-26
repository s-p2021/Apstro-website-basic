import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Moon from '../assets/images/squiglyplanets/green.png';
import Mercury from '../assets/images/gradientplanets/jupiter.png';
import Uranus from '../assets/images/gradientplanets/venus.png';
import Venus from '../assets/images/squiglyplanets/pink.png';

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
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

  h1 {
    margin-bottom: 0.5rem;
    font-size: 7rem;
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
    align-text: centre
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 20px;
  ouline: none;
  cursor: pointer;
  background: transparent;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 100;
`

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height 100%;
  max-width: 300px;
  max-height: 300px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;


  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
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
              Personalised spiritual guidance powered by the planets
            </motion.p>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ 
                scale: 0.95, 
                backgroundColor: '#67F6E7',
                border: 'none',
                color: '#000'
              }}
              initial={{opacity: 0}}
              animate={{opacity: 1, transition: {duration: 1.5}}}
            >
              Download Now
            </Button>
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