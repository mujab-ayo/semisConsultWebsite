import React from "react";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram, BsTelephone, BsMailbox,  } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-20 px-6 lg:px-20">
      <div className="flex flex-col gap-2 justify-center items-center lg:items-start w-full lg:w-1/5">
        <div className="">
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
        </div>
        <p>
          We help business toward success with expert strategies, tailored
          solutions, and a clear path to growth and innovation..
        </p>
      </div>
      <div className="flex justify-between items-center lg:items-start w-2/5 text-lg">
        <div className="flex flex-col">
          <span className="font-semibold">Home</span>
          <span>Service</span>
          <span>Pricing</span>
          <span>Contact</span>
          <span>About</span>
        </div>
        <div className="flex flex-col">
          <span>Social</span>
          <span className="flex gap-2 justify-start items-center text-lg">
            <span>
              <BsFacebook />
            </span>
            facebook
          </span>
          <span className="flex gap-2 justify-start items-center text-lg">
            <span>
              <BsLinkedin />
            </span>
            LinkedIn
          </span>
          <span className="flex gap-2 justify-start items-center text-lg">
            <span>
              <BsGithub />
            </span>
            Github
          </span>
          <span className="flex gap-2 justify-start items-center text-lg">
            <span>
              <BsInstagram />
            </span>
            Instagram
          </span>
        </div>
        <div className="flex flex-col justify-start ">
          <span>Get in touch</span>

          <span className="flex gap-2 justify-start items-center text-lg">
            {" "}
            <span>
              <BsTelephone />
            </span>{" "}
            +44 7400 383892
          </span>
          <span className="flex gap-2 justify-start items-center text-lg">
            {" "}
            <span>
              <BsMailbox />
            </span>{" "}
            hello@epicx.co.uk
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
