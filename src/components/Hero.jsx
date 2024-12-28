import React from "react";

const Hero = () => {
  return (
    <div className="mt-20  w-full flex flex-col justify-center items-center gap-10 px-6 lg:px-20">
      <h1 className="font-extrabold text-7xl w-full text-center">
        Driving your business toward success with expert strategies
      </h1>
      <p className="text-lg font-medium text-gray-700 dark:text-gray-400">
        We help business toward success with expert strategies, tailored
        solutions, and a clear path to growth and innovation.
      </p>

      <div className="space-x-6">
        <button className="bg-primaryColor px-5 py-2 text-white font-medium rounded-xl hover:bg-transparent hover:text-primaryColor border-2 border-primaryColor">
          Get Started
        </button>
        <button className="bg-transparent px-5 py-2 text-primaryColor font-medium rounded-xl hover:bg-primaryColor hover:text-white border-2 border-primaryColor">
          See services
        </button>
      </div>
      <div className="w-full self-center">
        <img src="/images/hero-1.svg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
