"use client";
import React, { useState } from "react";
import Link from "next/link";
import { sessionRepository } from "@/repositories/sessionRepository";
import { useAuthStore } from "@/store/useAuthStore";
import { usePageStore } from "@/store/usePageStore";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogged, setIsLogged, reset } = useAuthStore();

  const { isShopper, setIsShopper } = usePageStore();

  const { logout } = sessionRepository();

  const router = useRouter();

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

  // Gérer la déconnexion et réagir immédiatement sans rafraîchir
  const handleLogout = () => {
    logout();
    reset();
    setIsLogged(false); // Mettre à jour l'état local immédiatement
  };

  return (
    <header className="font-sans w-full flex items-center justify-between bg-black bg-opacity-90 p-4 md:px-32 sticky top-0 py-2 transition-colors duration-300 z-50 text-base sm:text-xl">
      <nav className="md:flex space-x-4 flex items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/logo/flexfi-logo.png"
            alt="FlexFi Logo"
            className="h-10 w-auto neon-effect"
          />
        </Link>

        <style jsx>{`
          .neon-effect {
            filter: drop-shadow(0 0 8px #00fefb) brightness(1.2);
            transition: transform 0.3s ease, filter 0.3s ease;
          }

          .neon-effect:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 0 12px #00fefb) brightness(1.5);
          }

          .neon-text {
            position: relative;
          }

          .neon-text::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 9999px;
            background: linear-gradient(
              90deg,
              rgba(0, 254, 251, 0.3),
              rgba(0, 30, 44, 0.3)
            );
            filter: blur(6px);
            z-index: -1;
          }

          .shadow-glow {
            box-shadow: 0 0 15px rgba(0, 254, 251, 0.6),
              0 0 30px rgba(0, 254, 251, 0.3);
          }
        `}</style>

        <Link href="/">
          <button
            className={
              !isShopper
                ? "cursor-pointer hover:text-[#00FEFB] border-b border-[#00FEFB]"
                : "cursor-pointer hover:text-[#00FEFB]"
            }
            onClick={() => setIsShopper(false)}
          >
            For businesses
          </button>
        </Link>
        <Link href="/">
          <button
            className={
              isShopper
                ? "cursor-pointer hover:text-[#00FEFB] border-b border-[#00FEFB]"
                : "cursor-pointer hover:text-[#00FEFB]"
            }
            onClick={() => setIsShopper(true)}
          >
            For shoppers
          </button>
        </Link>
        <span className="ml-2 text-xs md:text-sm bg-[#00FEFB] bg-opacity-30 text-[#00FEFB] border border-[#00FEFB] px-3 py-1 rounded-full font-sans neon-text shadow-glow">
          BETA
        </span>
      </nav>

      <div className="flex items-center space-x-4">
        {!isLogged ? (
          <div className="flex items-center space-x-4">
            <Link
              className="hidden md:flex cursor-pointer hover:scale-110 ease-out duration-300"
              href="/login"
            >
              Log in
            </Link>
            <Link
              className="hidden md:flex border border-gray-300 hover:scale-110 ease-out duration-300 rounded-full px-4 pt-1 pb-2 cursor-pointer"
              href="/register"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              className="hidden md:flex border border-gray-300 hover:scale-110 ease-out duration-300 rounded-full px-4 py-1 cursor-pointer"
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
        <button
          className="hidden md:flex cursor-pointer hover:scale-110 ease-out duration-300"
          onClick={scrollToFAQ}
        >
          Help
        </button>
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
                  Sign up
                </Link>
                <Link
                  href="/login"
                  className="text-white text-4xl font-bold hover:text-[#00FEFB] transition duration-500 transform hover:scale-110"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-white text-4xl font-bold hover:text-[#00FEFB] transition duration-500 transform hover:scale-110"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  className="text-white text-4xl font-bold hover:text-[#00FEFB] transition duration-500 transform hover:scale-110"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                >
                  Logout
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
              Help
            </button>
          </nav>

          {/* Bouton pour fermer le menu */}
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
    </header>
  );
};

export default Header;
