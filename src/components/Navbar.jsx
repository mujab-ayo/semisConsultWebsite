import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import ModeSwitch from "../components/ModeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 inset-x-0 z-10 bg-white dark:bg-gray-950 shadow-md px-6 lg:px-20 py-4 flex items-center justify-between">
      {/* Logo */}
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

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row lg:gap-8 xl:gap-20 absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto bg-white dark:bg-gray-950 w-full lg:w-auto shadow-lg lg:shadow-none px-6 lg:px-0 py-4 lg:py-0`}
      >
        <nav className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <Link to="#Service" className="py-2 lg:py-0">
            Service
          </Link>
          <Link to="#Pricing" className="py-2 lg:py-0">
            Pricing
          </Link>
          <Link to="#Contact" className="py-2 lg:py-0">
            Contact
          </Link>
          <Link to="#About" className="py-2 lg:py-0">
            About
          </Link>
        </nav>

        {/* Get Started Button & ModeSwitch */}
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 mt-4 lg:mt-0">
          <button className="bg-primaryColor p-2 text-white font-normal text-lg rounded-md">
            Get Started
          </button>
          <ModeSwitch />
        </div>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={toggleOpen}
        className="block text-3xl lg:hidden focus:outline-none ml-auto"
      >
        <FaHamburger />
      </button>
    </div>
  );
};

export default Navbar;
