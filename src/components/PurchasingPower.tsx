/* eslint-disable react/no-unknown-property */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import FeatureSmartphoneCard from "./FeatureSmartphoneCard";

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

        {/* Smartphone Feature */}
        <div className="relative mb-12 flex flex-col md:flex-row justify-center w-full group">
          {/* Pseudo-élément via style JSX */}
          <style jsx>{`
            .relative::before {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 50vw; /* Légèrement plus large pour un effet plus subtil */
              height: 50vw;
              border-radius: 50%;
              background: radial-gradient(
                circle,
                rgba(0, 254, 251, 1) 0%,
                /* Centre très intense */ rgba(0, 254, 251, 0.6) 20%,
                /* Transition douce */ rgba(0, 254, 251, 0.2) 50%,
                /* Atténuation progressive */ rgba(0, 254, 251, 0.05) 60%,
                /* Bords très diffus */ transparent 70%
                  /* Transparence complète */
              );
              z-index: 0;
            }
          `}</style>

          {/* Composants enfants */}
          <FeatureSmartphoneCard
            imageSrc="/images/smartphone1.webp"
            title="STAKING"
            subtitle="Optimize your assets and unlock access to Buy Now Pay Later"
            apr="8% APR"
            aprTextColor="#FFF"
            points={[
              "Unlock access to BNPL with USDC",
              "Increase your spending capacity",
              "$1 staked = $1 available for BNPL",
            ]}
          />
          <FeatureSmartphoneCard
            imageSrc="/images/smartphone2.webp"
            title="BNPL"
            subtitle="Transform your crypto into instant purchasing power"
            apr="0% APR"
            aprTextColor="#00FEFB"
            points={[
              "Fund your wallet to spend",
              "Split your payments from 3 to 12x",
              "Increase your purchasing power",
            ]}
          />
        </div>

        {/* Responsive button */}
        <Link
          href="/simulator"
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
