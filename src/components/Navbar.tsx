"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi"; // Hamburger Icon
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Close Icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup function when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


  return (

    <div>
        <header className={`p-5 flex justify-between items-center z-50`}>
      {/* Left: Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => {
          setIsOpen(true);
          console.log("menu open");
        }}
      >
        <FiMenu />
      </button>

      {/* Center: Logo */}
      <h1 className="text-3xl font-extrabold">nice</h1>

     

      {/* Mobile Dropdown Menu (Sliding Down Effect) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-start transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close on Background Click */}
        <div
          className="absolute inset-0"
          onClick={() => {
            setIsOpen(false);
            console.log("background close");
          }}
        ></div>

        <nav className="relative top-0 left-0 bg-white shadow-lg rounded-b-lg p-6 w-full flex flex-col items-center z-50">
          {/* Close Button */}
          <button
            onClick={() => {
              setIsOpen(false);
              console.log("dropdown close");
            }}
            className="absolute top-4 left-4 text-3xl text-gray-600 hover:text-black transition"
          >
            <IoClose />
          </button>

          {/* Mobile Navigation Links */}
          <ul className="w-full flex flex-col gap-6 text-lg text-gray-800 mt-12">
            <li className="hover:text-purple-600 cursor-pointer">o que fazemos</li>
            <li className="hover:text-purple-600 cursor-pointer">como te ajudamos</li>
            <li className="hover:text-purple-600 cursor-pointer">fale conosco</li>
          </ul>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-5">
        <ul className="flex gap-5 text-lg">
          <li className="hover:text-gray-600 cursor-pointer">o que fazemos</li>
          <li className="hover:text-gray-600 cursor-pointer">como te ajudamos</li>
          <li className="hover:text-gray-600 cursor-pointer">fale conosco</li>
        </ul>
      </nav>
       {/* Right: Social Icons */}
       <div className="flex gap-4">
        <button>
          <FaInstagram className="text-xl" />
        </button>
        <button>
          <FaFacebookF className="text-xl" />
        </button>
      </div>
    </header>
    </div>
  
  );
};

export default Navbar;
