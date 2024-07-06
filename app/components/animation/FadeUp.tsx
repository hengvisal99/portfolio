"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const FadeUp = ({ children } : {children : ReactNode}) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" , delay : 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
