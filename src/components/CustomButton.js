import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

function CustomButton(props) {
  return (
    <>
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
        {props.title}
      </Button>
    </>
  )
}

export default CustomButton
