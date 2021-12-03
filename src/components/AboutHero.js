import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from './Card'

const Section = styled.div`
  height: 150vh;
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

  @media screen and (max-width: 768px) {
    height: 200vh;
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
          <Card 
            title='learn'
            paragraph=''
          />
          <Card 
            title='guidance'
          /> 
          <Card 
            title='social'
            paragraph='Apstro is a social first app where you can connect with your friends. Just as learning about yourself can help you understand yourself, it can help you understand your friends, family and partners. It helps spark meaningful conversations to overcome barriers in relationships and build meaningful connections.'
          /> 
        </CardContainer>
      </Section>
    </>
  )
}

export default AboutHero
