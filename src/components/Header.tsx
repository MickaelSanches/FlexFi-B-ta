"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useLoginStore } from "@/store/useLoginStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { isLogged } = useLoginStore();

  return (
    <header className="bg-slate-950 border-b border-gray-300 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Centered Navigation */}
        <nav className="md:flex space-x-4 flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo/flexfi-logo.png"
              alt="FlexFi Logo"
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="hidden md:flex cursor-pointer hover:text-[#00FEFB]"
          >
            Solutions
          </Link>
          <Link
            href="/"
            className="hidden md:flex cursor-pointer hover:text-[#00FEFB]"
          >
            Ressources
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {!isLogged ? (
            <div className="flex items-center space-x-4">
              <Link
                className="cursor-pointer hover:scale-110 ease-out duration-300"
                href="/login"
              >
                Log in
              </Link>

              <Link
                className="border border-gray-300 hover:scale-110 ease-out duration-300 rounded-full px-4 py-1 cursor-pointer"
                href="/signup"
              >
                Sign up
              </Link>
            </div>
          ) : (
            <Link
              className="border border-gray-300 hover:scale-110 ease-out duration-300 rounded-full px-4 py-1 cursor-pointer"
              href="/signup"
            >
              Dashboard
            </Link>
          )}

          {/* Trait vertical entre Help et Sign up */}
          <div className="hidden md:flex border-l border-gray-300 h-6"></div>

          <Link
            className="hidden md:flex cursor-pointer hover:scale-110 ease-out duration-300"
            href="/help"
          >
            Help
          </Link>
        </div>

        {/* Burger menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {/* Burger menu icon */}
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

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-300 flex flex-col items-center">
          <a className="block text-gray-700 px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Solutions
          </a>
          <a className="block text-gray-700 px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Ressources
          </a>
          <Link
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
            href="/signup"
          >
            Sign up
          </Link>
          <Link
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
            href="/login"
          >
            Log in
          </Link>
          <Link
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
            href="/help"
          >
            Help
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
