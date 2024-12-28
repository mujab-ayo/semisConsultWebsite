import React, { createContext } from "react";
import { useState, useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ModeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  const switchMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
    console.log(document.body.classList);
  };

  return (
    <div className="text-2xl hover:bg-zinc-50 p-3 rounded-full dark:hover:bg-zinc-800" onClick={switchMode}>
      {isDark ? <BiMoon /> :  <BiSun />}
    </div>
  );
};

export default ModeSwitch;
