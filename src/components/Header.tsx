"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black border-2 border-gray-800 rounded-full p-4 mx-5 mt-5 mb-10 md:mx-20">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo/flexfi-logo.png"
            alt="FlexFi Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation pour les écrans larges */}
        <nav className="hidden md:flex space-x-4">
          <Link className="text-white hover:text-gray-400" href="/roadmap">
            Roadmap
          </Link>
          <Link className="text-white hover:text-gray-400" href="/team">
            Team
          </Link>
          <Link className="text-white hover:text-gray-400" href="/whitepaper">
            WhitePaper
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Link className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300" href="/login">
            Log In
          </Link>
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
        <nav className="md:hidden bg-black border-t border-gray-700 flex flex-col items-center">
          <Link className="block text-white px-4 py-2 hover:bg-gray-800" href="/roadmap">
            Roadmap
          </Link>
          <Link className="block text-white px-4 py-2 hover:bg-gray-800" href="/team">
            Team
          </Link>
          <Link className="block text-white px-4 py-2 hover:bg-gray-800" href="/whitepaper">
            WhitePaper
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
