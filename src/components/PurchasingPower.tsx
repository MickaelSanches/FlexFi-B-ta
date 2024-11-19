"use clien";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const PurchasingPower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="bg-[#fbfbfb] min-h-screen flex flex-col items-center"
    >
      <div className="flex flex-col items-center w-full">
        {/* Responsive heading */}
        <h3
          className={`font-display text-2xl md:text-6xl text-center mx-auto text-black mt-24 mb-24 sm:mt-36 md:mt-48 motion-preset-slide-right motion-delay-[450ms] z-10 ${
            isVisible
              ? "motion-preset-slide-right motion-delay-[300ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          INCREASE YOUR <br /> PURCHASING POWER
        </h3>

        {/* Responsive image */}
        <div className="flex flex-col md:flex-row justify-center w-full ">
          <div
            className={`relative w-auto max-w-md h-[600px] mx-5 ${
              isVisible
                ? "motion-preset-slide-left motion-delay-[400ms]"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Image */}
            <img
              src="/images/smartphone1.webp"
              alt="Smartphone Background"
              className="w-full h-full object-cover rounded-[2rem]"
            />

            {/* Contenu superposé */}
            <div
              className={`absolute font-sans inset-0 flex flex-col text-black items-center justify-center text-center p-6`}
            >
              {/* Titre */}
              <h1 className="text-black font-display text-2xl font-bold">
                STAKING
              </h1>
              {/* Sous-titre */}
              <p className="text-black mt-4">
                Optimize your assets and unlock <br /> access to Buy Now Pay
                Later
              </p>
              {/* Badge APR */}
              <div className="mt-6 font-display bg-[#39576C] text-white text-lg font-bold py-4 px-8  rounded-full">
                8% APR
              </div>
              {/* Liste des points */}
              <ul className="mt-6 space-y-2 text-left">
                <li className="flex items-center">
                  <span className="mr-2 text-lg">➤</span> Unlock access to BNPL
                  with USDC
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-lg">➤</span> Increase your spending
                  capacity
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-lg">➤</span> $1 staked = $1
                  available for BNPL
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`relative w-auto max-w-md h-[600px] mx-5 ${
              isVisible
                ? "motion-preset-slide-left motion-delay-[400ms]"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Image */}
            <img
              src="/images/smartphone2.webp"
              alt="Smartphone Background"
              className="w-full h-full object-cover rounded-[2rem]"
            />

            {/* Contenu superposé */}
            <div className="absolute inset-0 flex flex-col text-black items-center justify-center text-center p-6">
              {/* Titre */}
              <h1 className="text-black font-display text-2xl font-bold">
                BNPL
              </h1>
              {/* Sous-titre */}
              <p className="text-black mt-4">
                Transform your crypto into instant <br /> purchasing power
              </p>
              {/* Badge APR */}
              <div className="mt-6 font-display bg-[#39576C] text-[#00FEFB] text-lg font-bold py-4 px-8 rounded-full">
                0% APR
              </div>
              {/* Liste des points */}
              <ul className="mt-6 space-y-2 text-left">
                <li className="flex items-center">
                  <span className="mr-2 text-lg">➤</span> Fund your wallet to
                  spend
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-lg">➤</span> Split your payments
                  from 3 to 12x
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-lg">➤</span> Increase your
                  purchasing power
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Responsive button */}
        <Link
          href="/register"
          className={`mt-12 relative flex items-center bg-[#00FEFB] text-black font-bold px-6 py-4 rounded-full hover:scale-110 ease-out duration-300 ${
            isVisible
              ? "motion-preset-rebound-down motion-delay-[600ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl mr-2 md:mr-4 font-display">Simulator</p>
          <IoIosArrowForward size={22} />
        </Link>
      </div>
    </section>
  );
};

export default PurchasingPower;
