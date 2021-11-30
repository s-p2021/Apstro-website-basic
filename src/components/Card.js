import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Section = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  opacity: 0.5;
  border-radius: 35px;
  padding: 0.5rem 1rem;

  h2 {
    margin-bottom: 0.5rem;
    font-size: 3rem;
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
`;

function Card(props) {
  return (
    <>
      <Section
        // whileHover={{ scale: 1.05 }}
        // initial={{opacity: 0}}
        // animate={{opacity: 1, transition: {duration: 1.5}}}
      >
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </Section>
    </>
  )
}

export default Card
