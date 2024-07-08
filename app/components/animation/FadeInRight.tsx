"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FadeInRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // start off-screen to the right
      animate={{ opacity: 1, x: 0 }} // end at its natural position
      transition={{ duration: 0.5 }}
      style={{ margin: '10px', padding: '20px', background: 'lightblue', borderRadius: '5px' }}
    >
      Fade In From Right
    </motion.div>
  );
};

export default FadeInRight;