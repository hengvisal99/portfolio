

"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
interface props {
  children: ReactNode;
  width?: "fit-content" | "100%";
}
const ScaleCenter = ({ children , width = "fit-content"} : props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
    <motion.div
      variants={{
        hidden: { x: -100, opacity: 0 },
        visible:{ x: 1, opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.3 , ease: "easeIn"  }}
    >
      {children}
    </motion.div> 
  </div>
  );
};

export default ScaleCenter;
