"use client"
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black border-2 border-gray-800 rounded-full p-4 ml-20 mr-20 mt-5 mb-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo/flexfi-logo.png"
            alt="FlexFi Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation pour les écrans larges */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            Roadmap
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Team
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            WithePaper
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300">
            Wallet
          </button>
        </div>

        {/* Burger menu pour les petits écrans */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Icone du menu burger */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu déroulant pour les petits écrans */}
      {isOpen && (
        <nav className="md:hidden bg-black border-t border-gray-700">
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-800">
            Home
          </a>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-800">
            About
          </a>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-800">
            Contact
          </a>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-800">
            Sign Up
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
