import React, { useState } from "react";
import faq from "../faq";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Faq = () => {
  const [isToggle, setIsToggle] = useState(null);
    const toggleQue = (index) => {
      
      setIsToggle(isToggle === index ? null : index);

      
  };
  return (
    <div className="bg-primaryColor w-full flex flex-col justify-center items-center gap-10 p-6 text-white lg:px-20 ">
      <h2 className="font-semibold text-6xl w-full text-center ">
        Frequently asked questions
      </h2>

      <div className="flex flex-col gap-12 w-full">
        {faq.map((box, index) => (
          <div
            key={index}
            className="bg- p-3 flex flex-col gap-6 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => {
                toggleQue(index);
              }}
            >
              <h4 className="font-normal text-lg">{box.que}</h4>
              {isToggle === index ? (
                <FaAngleUp className="stroke-[1] p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 text-4xl" />
              ) : (
                <FaAngleDown className="stroke-[1] p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 text-4xl" />
              )}
            </div>
            {isToggle === index ? <p className="">{box.ans} </p> : null}
          </div>
        ))}
      </div>
      <p className="text-lg font-semibold">
        Didn’t get ? you can get more help from{" "}
        <span className="underline">Support</span> or <span className="underline">Contact</span>
      </p>
    </div>
  );
};

export default Faq;
