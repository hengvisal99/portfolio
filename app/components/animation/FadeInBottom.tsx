"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
}

const FadeInBottom = ({ children, delay, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log('isInView', isInView)
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInBottom;
