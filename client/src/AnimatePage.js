import React from 'react';
import { motion } from 'framer-motion';

const animation = {
  initial: {opacity: 0, x: 200},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: -200},
};

const AnimatePage = ({ children }) => {
  return (
    <>
      <motion.div
        variants={animation}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: .2 }}
        className='animate-page'
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatePage;