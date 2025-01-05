import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service";
import OnboardingCard from "../components/OnboardingCard";
import PricingCard from "../components/PricingCard";
import Faq from "../components/Faq";
import Quote from "../components/Quote";
import Footer from "../components/Footer";

import { motion } from "framer-motion";


const Home = () => {


  const brandLogos = [
    "brand-logo-1.svg",
    "brand-logo-2.svg",
    "brand-logo-3.svg",
    "brand-logo-4.svg",
    "brand-logo-5.svg",
    "brand-logo-6.svg",
  ];

  return (
    <div className="dark:bg-gray-950 flex flex-col justify-center items-center gap-20">
      <Navbar />
      <Hero />

      <div className=" flex flex-col justify-center items-center gap-10 px-6 lg:px-20">
        <h2 className="text-primaryColor font-medium text-lg dark:text-white">
          Our Partners
        </h2>
        <motion.div
          initial={ { x: '100%' } }
          animate={ { x: "-100%" } }
          transition={ {
            repeat: Infinity,
            ease: 'linear',
            duration: 15
          }}
          className="flex space-x-16 ">
          {brandLogos.map((logo, index) => (
            <img
              src={`/images/${logo}`}
              key={index}
              alt={`logo ${index + 1}`}
              className="dark:invert"
            />
          ))}
        </motion.div>
      </div>

      <div className=" flex flex-col justify-center items-center gap-10 px-6 lg:px-20">
        <h1 className="text-primaryColor font-medium text-lg dark:text-white">
          About Us
        </h1>
        <h2 className="font-bold text-4xl text-primaryColor dark:text-white">
          Merging growth and scalability for sustainable business
        </h2>
        <p className="max-w-4xl font-normal text-lg text-gray-800 text-center dark:text-gray-400">
          At Semis Consultants, we empower businesses to unlock their full
          potential with tailored strategies and expert solutions. From
          strategic planning and operational optimization to financial
          management and market analysis, we deliver insights and customized
          strategies to drive sustainable growth.
        </p>
        <p className="max-w-4xl font-normal text-lg text-gray-800 dark:text-gray-400">
          Our mission is to be a trusted partner for businesses, offering
          innovative solutions that deliver measurable results. Whether
          streamlining processes, expanding your reach, or boosting
          profitability, Semis Consultants is dedicated to helping you overcome
          challenges and achieve long-term success.
        </p>
        <button className="text-white w-3/12 px-5 py-2 bg-primaryColor font-medium rounded-xl hover:text-primaryColor hover:bg-transparent border-2 border-primaryColor">
          read more
        </button>
      </div>
      <Service />
      <OnboardingCard />
      <PricingCard />
      <Faq />
      <Quote />
      <Footer />
    </div>
  );
};

export default Home;
