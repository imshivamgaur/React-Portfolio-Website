import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-99 flex w-full items-center justify-between border-b-1  border-b-gray-800 bg-black/80 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-70 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Shivam
      </a>
      {/* desktop page links */}
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#skills"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Skills</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      {/* Social media Links */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100">
          <a href="https://github.com/imshivamgaur/shivam-gaur?tab=readme-ov-file">
            {" "}
            <BsGithub />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a href="https://www.linkedin.com/in/shivam-gaur-001b00253/">
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <a href="https://www.instagram.com/ishivamgaur/">
            <BsInstagram />
          </a>
        </li>
      </ul>

      {/* Hamburger menu */}

      <button className="block md:hidden text-4xl" onClick={menuOpen}>
        {isOpen ? <BiX /> : <BiMenu />}
      </button>
      {/* For mobile layout */}
      {
        <div
          className={`fixed top-[84px] right-0 transition-transform duration-300 md:hidden flex h-screen w-1/2 flex-col items-start gap-10 border border-gray-800 bg-black/80 backdrop-blur-md p-12 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* display page links */}
          <ul className="flex flex-col gap-8 ">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Skills</li>
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>

          {/* social links  */}
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100">
              <a href="https://github.com/imshivamgaur/shivam-gaur?tab=readme-ov-file">
                <BsGithub />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <a href="https://www.linkedin.com/in/shivam-gaur-001b00253/">
                <BsLinkedin />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <a href="https://www.instagram.com/ishivamgaur/">
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      }
    </nav>
  );
};

export default Navbar;
