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
    text-align: center;
    color: white;
  }

  @media screen and (max-width: 960px) {
    height: 175vh;
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
            paragraph='the planets don’t govern our lives, they create a set of conditions we can make the most of. we teach you the laws that govern this and empower you to use it in your everyday life, relationships and self development journey. no more cryptic birth charts or hours of researching, apstro does the work for you.'
          />
          <Card 
            title='guidance'
            paragraph='apstro combines ancient wisdom, modern technology and science to immerse you in self introspection, empowering you to understand yourself. We will help you embark on a self development journey to learn your strengths and weaknesses so you can break the cycle of self destructive behaviour and utilise your strengths.'
          /> 
          <Card 
            title='social'
            paragraph='just as learning about your birth chart can help you understand yourself, it can help you understand your friends, family and partners. we help spark meaningful conversations to overcome barriers in relationships and build deeper connections by providing compatibility ratings and reports.'
          /> 
        </CardContainer>
      </Section>
    </>
  )
}

export default AboutHero
