import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`

function CustomButton(props) {

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
      <Button
        whileHover={{ scale: 1.05 }}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeLeft}
        whileTap={{ 
          scale: 0.95, 
          backgroundColor: '#67F6E7',
          border: 'none',
          color: '#000'
        }}
      >
        {props.title}
      </Button>
    </>
  )
}

export default CustomButton
