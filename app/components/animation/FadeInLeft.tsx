"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FadeInLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // start off-screen to the left
      animate={{ opacity: 1, x: 0 }} // end at its natural position
      transition={{ duration: 0.5 }}
      style={{ margin: '10px', padding: '20px', background: 'lightcoral', borderRadius: '5px' }}
    >
      Fade In From Left
    </motion.div>
  );
};

export default FadeInLeft;