"use client";
import { Image } from "@nextui-org/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const HomePhoto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const photoControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      photoControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div className="relative flex justify-center w-full h-full">
      <motion.div
        ref={ref}
        className="absolute order:1 lg:order-none w-[310px] h-[250px] sm:w-[340px] sm:h-[290px] lg:w-[490px] lg:h-[450px] 
                flex items-center justify-center"
        initial="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        animate={photoControls}
        transition = {{ delay: 0.5, duration: 0.4, ease: "easeIn" }}
      >
        <Image
          className="rounded-bl-full rounded-br-full"
          src="/profile.webp"
          alt=""
        />
      </motion.div>
      <motion.svg
        className="h-[280px] sm:h-[320px] lg:h-[505px] mx-auto"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default HomePhoto;
