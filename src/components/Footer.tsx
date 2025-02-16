import React from "react";
import Facebook from "../../icons/facebook";
import Instra from "../../icons/twiter";

const Footer = () => {
  return (
    <footer className="bg-[#2D0052] text-white py-10 px-6 md:px-[200px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left - Logo */}
        <div className="text-left">
          <h2 className="text-2xl font-bold">nice</h2>
        </div>

        {/* Center - Navigation */}
        <nav className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-300 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">o que fazemos</a>
          <a href="#" className="hover:text-white transition">como te ajudamos</a>
          <a href="#" className="hover:text-white transition">fale conosco</a>
        </nav>

        {/* Right - Social Media */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
 
           <Facebook className="bg-white"/>
           <Instra  className="bg-white"/>
     
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="text-sm text-gray-300 mb-4 md:mb-0">
          Receba as novidades da nice
        </p>

        <form className="flex bg-white rounded-md overflow-hidden w-full md:w-auto">
          <input
            type="email"
            placeholder="nome@email.com"
            className="p-3 w-full text-gray-800 focus:outline-none"
          />
          <button type="submit" className="bg-gray-900 text-white px-5 py-3 font-semibold">
            Inscrever
          </button>
        </form>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-500 my-6"></div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-xs">
        Nice template by alopeslucao on Figma - 2021
      </p>
    </footer>
  );
};

export default Footer;
