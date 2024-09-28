"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sessionRepository } from "@/repositories/sessionRepository";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const { logout } = sessionRepository();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Vérifier le token et actualiser l'état
  useEffect(() => {
    const checkToken = () => {
      const token = sessionStorage.getItem("token");
      setIsLogged(!!token);
    };

    // Vérification initiale
    checkToken();

    // Ajouter un écouteur pour détecter les changements dans le sessionStorage
    const handleStorageChange = () => {
      checkToken();
    };

    window.addEventListener("storage", handleStorageChange);

    // Nettoyer l'écouteur lors du démontage
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [isLogged]);

  // Gérer la déconnexion et réagir immédiatement sans rafraîchir
  const handleLogout = () => {
    logout();
    setIsLogged(false); // Mettre à jour l'état local immédiatement
  };

  return (
    <header className="w-full flex items-center justify-between bg-slate-950 border-b border-gray-300 p-4 md:px-32">
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
              href="/register"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              className="border border-gray-300 hover:scale-110 ease-out duration-300 rounded-full px-4 py-1 cursor-pointer"
              href="/dashboard"
            >
              Dashboard
            </Link>
            <button
              className="underline underline-offset-8 hover:scale-110 ease-out duration-300 rounded-full px-4 py-1 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}

        <div className="hidden md:flex border-l border-gray-300 h-6"></div>
        <Link
          className="hidden md:flex cursor-pointer hover:scale-110 ease-out duration-300"
          href="/help"
        >
          Help
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
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
