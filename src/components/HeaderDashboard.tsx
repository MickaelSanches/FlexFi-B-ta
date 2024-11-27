"use client";
import React from "react";
import Link from "next/link";
import { useLanguageStore } from "@/store/useLanguageStore";
import BalanceButton from "./BalanceButton";

const HeaderDashboard = () => {
  const { isEnglish, setIsEnglish } = useLanguageStore();

  const changeLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <nav className="font-sans w-full flex items-center justify-between bg-[#D8E6ED] px-4 py-2 md:px-6 transition-colors duration-300 z-50 text-sm sm:text-base">
      {/* Logo */}
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center motion-preset-rebound-down motion-delay-[400ms]"
        >
          <img
            src="/logo/flexfi-logo.png"
            alt="FlexFi Logo"
            className="h-10 w-auto neon-effect" // Réduction de la taille du logo
          />
        </Link>
      </div>

      {/* Balance Button */}
      <div className="flex-shrink-0">
        <BalanceButton />
      </div>

      {/* Boutons et Langue */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link
          href="/demoPage"
          className="text-black font-display text-xs md:text-sm hover:scale-105 ease-out duration-300 rounded-full bg-[#00FEFB] px-4 py-2 cursor-pointer motion-preset-rebound-down motion-delay-[550ms]"
        >
          {isEnglish ? "Test Demo" : "Demostración"}
        </Link>

        {isEnglish ? (
          <img
            className="hidden md:flex cursor-pointer h-5 w-5 ease-out duration-300 motion-preset-rebound-down motion-delay-[600ms]"
            src="/images/flag/anglais-flag.png"
            alt="english flag"
            onClick={changeLanguage}
          />
        ) : (
          <img
            className="hidden md:flex cursor-pointer h-5 w-5 ease-out duration-300 motion-preset-rebound-down motion-delay-[600ms]"
            src="/images/flag/spanish-flag.png"
            alt="spanish flag"
            onClick={changeLanguage}
          />
        )}
      </div>
    </nav>
  );
};

export default HeaderDashboard;
