import React from "react";
import Logo from "../assets/larnu_logo.png";
import { Icon } from "@iconify/react";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-white">
      <img className="w-36" src={Logo} alt="Larnu Logo" />
      <Icon className="text-3xl" icon="charm:menu-hamburger" />
    </div>
  );
};

export default Header;
