import React from "react";
import { delay, easeIn, easeInOut, easeOut, motion } from "framer-motion";

const Hero = () => {
  const slide = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
      
    },
  };
  const wordSlide = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1,  x: 0},
  };

  const buttonMotion = {
    hidden: { opacity: 0, },
    show: { opacity: 1, },
  };


  return (
    <motion.div
      variants={slide}
      initial="hidden"
      animate="show"
      className="mt-20  w-full flex flex-col justify-center items-center gap-10 px-6 lg:px-20"
    >
      <motion.h1
        variants={wordSlide}
        transition={{ duration: 0.9, ease: "easeIn" }}
        className="font-extrabold text-7xl w-full text-center"
      >
        Driving your business toward success with expert strategies
      </motion.h1>
      <motion.p
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
        className="text-lg font-medium text-gray-700 dark:text-gray-400"
      >
        We help business toward success with expert strategies, tailored
        solutions, and a clear path to growth and innovation.
      </motion.p>

      <motion.div variants={slide} className="space-x-6">
        <button
          variants={buttonMotion}
          transition={{ delay: 0.35, duration: 0.9, ease: easeInOut }}
          className="bg-primaryColor px-5 py-2 text-white font-medium rounded-xl hover:bg-transparent hover:text-primaryColor border-2 border-primaryColor"
        >
          Get Started
        </button>
        <button
          variants={buttonMotion}
          transition={{ delay: 0.35, duration: 0.9, ease: easeInOut }}
          className="bg-transparent px-5 py-2 text-primaryColor font-medium rounded-xl hover:bg-primaryColor hover:text-white border-2 border-primaryColor"
        >
          See services
        </button>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
        className="w-full self-center"
      >
        <img src="/images/hero-1.svg" alt="" className="w-full" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
