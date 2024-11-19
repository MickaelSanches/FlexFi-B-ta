"use client";
import React, { useState } from "react";
import Link from "next/link";
import { sessionRepository } from "@/repositories/sessionRepository";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/store/useLanguageStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogged, setIsLogged, reset } = useAuthStore();
  const { logout } = sessionRepository();
  const router = useRouter();
  const { isEnglish, setIsEnglish } = useLanguageStore();

  const scrollToFAQ = async (e: React.MouseEvent) => {
    e.preventDefault();
    await router.push("/");

    setTimeout(() => {
      const faqSection = document.getElementById("faq-section");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    reset();
    setIsLogged(false);
  };

  const changeLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <nav className="font-sans w-full flex items-center justify-between bg-opacity-90 p-4 md:px-32 py-2 transition-colors duration-300 z-50 text-base sm:text-xl">
      <div className="md:flex space-x-4 flex items-center">
        <Link
          href="/"
          className="flex items-center motion-preset-rebound-down motion-delay-[400ms]"
        >
          <img
            src="/logo/flexfi-logo.png"
            alt="FlexFi Logo"
            className="h-14 w-auto neon-effect"
          />
        </Link>
      </div>

      <div>
        <span className="ml-2 md:text-sm text-black font-display text-sm hover:scale-110 ease-out duration-300 rounded-full bg-[#00FEFB] px-8 pt-4 pb-4 cursor-pointer motion-preset-rebound-down motion-delay-[550ms]">
          {isEnglish ? "Test Demo" : "Demostración"}
        </span>
      </div>

      <div className="flex items-center space-x-4">
        {!isLogged ? (
          <div className="flex items-center space-x-4">
            <button
              className="hidden md:flex font-display text-sm hover:scale-110 ease-out duration-300 rounded-full px-4 pt-1 pb-2 cursor-pointer motion-preset-rebound-down motion-delay-[650ms]"
              onClick={scrollToFAQ}
            >
              {isEnglish ? "Simulator" : "Simulador"}
            </button>
            <button
              className="hidden md:flex font-display text-sm hover:scale-110 ease-out duration-300 rounded-full px-4 pt-1 pb-2 cursor-pointer motion-preset-rebound-down motion-delay-[650ms]"
              onClick={scrollToFAQ}
            >
              FAQ
            </button>
            <Link
              className="hidden md:flex font-display text-sm hover:scale-110 bg-black ease-out duration-300 rounded-full px-4 pt-1 pb-2 cursor-pointer motion-preset-rebound-down motion-delay-[650ms]"
              href="/login"
            >
              {isEnglish ? "Sign In" : "Iniciar sesión"}
            </Link>
            <Link
              className="hidden md:flex text-black font-display text-sm hover:scale-110 ease-out duration-300 rounded-full bg-[#00FEFB] px-4 pt-1 pb-2 cursor-pointer motion-preset-rebound-down motion-delay-[650ms]"
              href="/register"
            >
              {isEnglish ? "Sign up" : "Registrarse"}
            </Link>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              className="hidden md:flex border border-gray-300 hover:scale-110 ease-out duration-300 rounded-full px-4 py-1 cursor-pointer"
              href="/dashboard"
            >
              {isEnglish ? "Dashboard" : "Panel"}
            </Link>
          </div>
        )}

        {isEnglish ? (
          <img
            className="hidden md:flex cursor-pointer h-6 w-6 ml-4 mr-2 ease-out duration-300 motion-preset-rebound-down motion-delay-[600ms]"
            src="/images/flag/anglais-flag.png"
            alt="english flag"
            onClick={changeLanguage}
          />
        ) : (
          <img
            className="hidden md:flex cursor-pointer h-6 w-6 ml-4 mr-2 ease-out duration-300 motion-preset-rebound-down motion-delay-[600ms]"
            src="/images/flag/spanish-flag.png"
            alt="spanish flag"
            onClick={changeLanguage}
          />
        )}
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
        <div className="fixed inset-0 bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-95 flex flex-col justify-center items-center z-50 transition-opacity duration-300">
          <nav className="flex flex-col items-center space-y-8">
            {!isLogged ? (
              <>
                <Link
                  href="/register"
                  className="text-white text-4xl font-bold hover:text-[#00FEFB] transition duration-500 transform hover:scale-110"
                  onClick={() => setIsOpen(false)}
                >
                  {isEnglish ? "Sign up" : "Registrarse"}
                </Link>
                <Link
                  href="/login"
                  className="text-white text-4xl font-bold hover:text-[#00FEFB] transition duration-500 transform hover:scale-110"
                  onClick={() => setIsOpen(false)}
                >
                  {isEnglish ? "SignIn" : "Iniciar sesión"}
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-white text-4xl font-bold hover:text-[#00FEFB] transition duration-500 transform hover:scale-110"
                  onClick={() => setIsOpen(false)}
                >
                  {isEnglish ? "Dashboard" : "Panel"}
                </Link>
                <button
                  className="text-white text-4xl font-bold hover:text-[#00FEFB] transition duration-500 transform hover:scale-110"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                >
                  {isEnglish ? "Logout" : "Cerrar sesión"}
                </button>
              </>
            )}

            <button
              className="text-white text-4xl font-bold hover:text-[#00FEFB] transition duration-500 transform hover:scale-110"
              onClick={(e) => {
                scrollToFAQ(e);
                setIsOpen(false);
              }}
            >
              {isEnglish ? "Help" : "Ayuda"}
            </button>

            {isEnglish ? (
              <img
                className="h-6 w-6 ml-4 mr-2"
                src="/images/flag/anglais-flag.png"
                alt="english flag"
                onClick={changeLanguage}
              />
            ) : (
              <img
                className="h-6 w-6 ml-4 mr-2"
                src="/images/flag/spanish-flag.png"
                alt="spanish flag"
                onClick={changeLanguage}
              />
            )}
          </nav>

          {/* Close Menu Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white hover:text-red-400 transition duration-300 focus:outline-none"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
