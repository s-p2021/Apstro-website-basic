import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import logoPng from '../assets/images/logo.png'

const Image = styled(motion.img)`
  width: 70px;
  height: 70px;
  display: flex;
  align-self: center;
  padding: 5px
`;

function Logo() {
  return (
    <>
      <Image
        src={logoPng}
        alt='logo'
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      />
    </>
  )
}

export default Logo
