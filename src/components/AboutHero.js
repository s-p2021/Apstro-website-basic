import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from './Card'

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 3.5rem;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 200;
    align-text: center;
    color: white;
  }
`;

const CardContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;

`;

function AboutHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 100},
    visible: { opacity: 1, y: 0 }
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
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >how can apstro help you?</motion.h1>
        <CardContainer>
          <Card title='learn'/>
          <Card title='guidance'/> 
          <Card title='compatibility'/> 
        </CardContainer>
      </Section>
    </>
  )
}

export default AboutHero
