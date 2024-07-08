"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

const SlideLeft = ({ children, delay = 0, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
 
      <motion.div
      ref={ref}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        {children}
      </motion.div>
  );
};

export default SlideLeft;
