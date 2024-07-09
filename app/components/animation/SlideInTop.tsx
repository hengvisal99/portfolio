// components/SlideInTop.js
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
}

const SlideInTop = ({ children, delay, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    console.log('isInView',isInView)
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { y: -1000, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideInTop;
