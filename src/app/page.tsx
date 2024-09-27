"use client";

import { BusinessSolution } from "@/components/BusinessSolution";
import Presentation from "../components/Presentation";
import { PaymentOptions } from "@/components/PaymentOptions";
import { PoweredByBanner } from "@/components/PoweredByBanner";
import { WhyFlexFi } from "@/components/WhyFlexFi";
import { FAQFlexFi } from "@/components/FAQFlexFi";
// import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <main className="w-full">
        <div className="bg-gray-950 flex flex-col md:flex-row justify-between items-center h-auto pt-16 pb-16 px-4 md:px-32">
          {/* Presentation component on top for smaller screens */}
          <div className="mb-8 md:mb-0">
            <Presentation />
          </div>
          <img
            src="/logo/flexicon.webp"
            alt="FlexFi icone"
            className="h-64 w-auto md:h-full neon-effect animate-neon-pulse"
          />
        </div>

        <style>{`
          /* Néon effect */
          .neon-effect {
            filter: drop-shadow(0 0 8px #00fefb) drop-shadow(0 0 16px #00fefb);
            animation: slideInRight 1s ease-out forwards,
              neon 1.5s infinite alternate;
          }

          /* Pulsation and neon animation */
          @keyframes neon {
            from {
              filter: drop-shadow(0 0 8px #00fefb) drop-shadow(0 0 16px #00fefb);
            }
            to {
              filter: drop-shadow(0 0 14px #00fefb)
                drop-shadow(0 0 28px #00fefb);
            }
          }

          /* Slide in from the right */
          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(100%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>

        {/* Sections below maintain their own responsive layout */}

        <BusinessSolution />

        <PaymentOptions />

        <PoweredByBanner />

        <WhyFlexFi />

        <FAQFlexFi />
      </main>
    </>
  );
}
