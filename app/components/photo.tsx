"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
const Photo = () => {
    return (
        
        <motion.div className='relative flex justify-center w-full h-full'>
            <motion.div 
                className="absolute order:1 lg:order-none w-[300px] h-[300px] lg:w-[470px] lg:h-[475px] 
                max-w-full  flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.4, ease: 'easeIn' }
                }}>
                {/* <img src="profile.png" 
                className="rounded-bl-full rounded-br-full -mt-[14px] w-[600px]"></img> */}
                <Image
                    className="rounded-bl-full rounded-br-full"
                    src="/profile.png"
                    priority
                    fill
                    quality={100}
                    // height={400}
                    // width={600}
                    alt=""
                />
            </motion.div>
            <motion.svg className="lg-w[530px] h-[320px] lg:h-[515px] mx-auto"
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
                    initial={{strokeDasharray : "24 10 0 0"}}
                    animate={{
                        strokeDasharray : ["15 120 25 25","16 25 92 72", "4 250 22 22"],
                        rotate : [120,360]
                    }}
                    transition={{
                        duration : 20,
                        repeat : Infinity,
                        repeatType : "reverse"
                    }}
                    />   
            </motion.svg>
        </motion.div>


    


    )
}

export default Photo