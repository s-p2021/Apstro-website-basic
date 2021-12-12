import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import iPhoneMockup from '.././assets/images/iphonemockup.png'
import CustomButton from './CustomButton';

const Section = styled.div`
  height: 150vh;
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
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  position: relative;
  font-family: 'Lexend Deca', sans-serif;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 200;
    text-align: center;
  }

  p {
    margin: 2rem 0;
    font-size: 1.25rem;
    line-height: 1.1;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 100;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 0rem;
    h1 {
      font-size: 1.25rem;
      margin: 1rem 0;
    }
    p {
      font-size: 1rem;
    }
  }
  
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height 100%;
  max-width: 550px;
  max-height: 550px;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

`;

function AboutHero() {

  const fadeRight = {
    hidden: { opacity: 0, x: -100},
    visible: { opacity: 1, x: 0 }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: 100},
    visible: { opacity: 1, x: 0 }
  }
  
  

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <Image 
              src={iPhoneMockup}
              ref={ref}
              alt='iphone mockup'
              initial="hidden"
              animate={controls}
              variants={fadeRight}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
            />
          </ColumnLeft>
          <ColumnRight>
            <motion.h1
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeLeft}
                transition={{ duration: 0.5 }}
              >
                free natal chart readings and compatibility ratings
              </motion.h1>
              <motion.p
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeLeft}
                transition={{ duration: 0.5 }}
              >
                we know you’re much more than your just your sun sign, so we map the planet’s position the minute you were born to provide a comprehensive report of your self, past, present and future. it’s time for something deeper and more insightful; download apstro today.
              </motion.p>
              <CustomButton
                title='download for IOS'
              />
          </ColumnRight>
        </Container>
      </Section>
    </>
  )
}

export default AboutHero;
