import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './Card.css';

function Card(props) {

  const fadeUp = {
    hidden: { opacity: 0, y: 100},
    visible: { opacity: 0.65, y: 0 }
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
      <motion.div className='section'
        whileHover={{ scale: 1.05, transition: {duration: 0.7} }}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        transition={{ duration: 1 }}
        // initial={{opacity: 0}}
        // animate={{opacity: 1, transition: {duration: 1.5}}}
      >
        <div>
          <h2 className='title'>{props.title}</h2>
          <p className='paragraph'>{props.paragraph}</p>
        </div>
      </motion.div>
    </>
  )
}

export default Card
