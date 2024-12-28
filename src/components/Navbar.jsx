import React, { useState } from "react";
import { Link } from "react-router-dom";

import ModeSwitch from "../components/ModeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed top-0 inset-x-0 z-10 bg-white dark:bg-gray-950 shadow-md px-6 lg:px-20 py-4 flex  flex-col lg:flex-row justify-between lg:items-center">
      <Link to="/" className="w-4/12 lg:w-2/12">
        <img
          src="/images/logo-light.svg"
          alt="logo in light version"
          className="hidden dark:block w-full"
        />
        <img
          src="/images/logo-black.svg"
          alt="logo in dark version"
          className="dark:hidden block w-full"
        />
      </Link>
      <div className="flex flex-col w-8/12 lg:w-6/12 lg:flex-row gap-10 lg:justify-between lg:items-center ">
        <nav className={`flex lg:flex-row flex-col lg:gap-8 xl:gap-20 ${isOpen}`}>
          <a to="#Service" className="">
            Service
          </a>
          <a to="#Pricing" className="">
            Pricing
          </a>
          <a to="#Contact" className="">
            Contact
          </a>
          <a to="#About" className="">
            About
          </a>
        </nav>
        <div className="flex items-center space-x-3">
         <button className="bg-primaryColor p-2 text-white font-normal text-lg rounded-md">Get Started</button>
          <ModeSwitch  />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
