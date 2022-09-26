import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets/index";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const navList = navLinks.map((nav) => (
    <li key={nav.id} className="font-poppins font-normal text-white">
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ));

  return (
    <nav className="w-full flex items-center justify-between py-6">
      <img src={logo} alt="hoobank" className="h-8" />
      <ul className="sm:flex items-center space-x-10 hidden">{navList}</ul>
      <div className="flex sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="hamburger-menu"
          className="cursor-pointer w-7 h-7 object-contain"
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } justify-center p-6 bg-black-gradient absolute rounded-xl min-w-[140px] top-20 right-0 mx-4 sm:hidden sidebar`}
      >
        <ul className="space-y-4 flex flex-col items-center">{navList}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
