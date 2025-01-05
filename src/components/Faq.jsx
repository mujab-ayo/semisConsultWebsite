import React, { useState, useRef } from "react";
import faq from "../faq";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const Faq = () => {
  const [isToggle, setIsToggle] = useState(null);
  const toggleQue = (index) => {
    setIsToggle(isToggle === index ? null : index);
  };

  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const faqShow = useTransform(scrollYProgress, [0, 1], ["-100%", "0"]);

  return (
    <div
      ref={containerRef}
      className="bg-primaryColor w-full flex flex-col justify-center items-center gap-10 p-6 text-white lg:px-20"
    >
      <motion.h2
        style={{ translateY: faqShow }}
        className="font-semibold text-6xl w-full text-center"
      >
        Frequently asked questions
      </motion.h2>

      <div className="flex flex-col gap-12 w-full">
        {faq.map((box, index) => (
          <div
            key={index}
            className="p-3 flex flex-col gap-6 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400"
          >
            <motion.div
              className="flex justify-between items-center cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => toggleQue(index)}
            >
              <h4 className="font-normal text-lg">{box.que}</h4>
              {isToggle === index ? (
                <FaAngleUp className="stroke-[1] text-4xl" />
              ) : (
                <FaAngleDown className="stroke-[1] text-4xl" />
              )}
            </motion.div>

            {isToggle === index && (
              <motion.p
                className="text-gray-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {box.ans}
              </motion.p>
            )}
          </div>
        ))}
      </div>

      {/* Support Section */}
      <p className="text-lg font-semibold">
        Didn’t get it? You can get more help from{" "}
        <span className="underline">Support</span> or{" "}
        <span className="underline">Contact</span>.
      </p>
    </div>
  );
};

export default Faq;
