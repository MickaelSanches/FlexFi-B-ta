"use client";

import { BusinessSolution } from "@/components/BusinessSolution";
import Presentation from "../components/Presentation";
import { PaymentOptions } from "@/components/PaymentOptions";
import { PoweredByBanner } from "@/components/PoweredByBanner";
import { WhyFlexFi } from "@/components/WhyFlexFi";
import { FAQFlexFi } from "@/components/FAQFlexFi";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <main className="font-sans w-full text-lg">
        <div
          className="bg-gray-900 md:bg-gray-950 flex flex-col md:flex-row justify-between items-center h-auto md:min-h-screen pt-16 pb-16 px-4 md:px-32 md:bg-cover md:bg-center"
          style={{
            backgroundImage: "url('/images/flexfi-crypto-payment.webp')",
            backgroundSize: "cover", // Pour s'assurer que l'image couvre toute la surface de la div
          }}
        >
          {/* Presentation component on top for smaller screens */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Presentation />
          </div>
          {/* You can add additional content or adjust layout here if needed */}
        </div>

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
