"use client";

import Presentation from "../components/Presentation";
import { FAQFlexFi } from "@/components/FAQFlexFi";
import Header from "@/components/Header";
import TokkenBanner from "@/components/TokkenBanner";
import PurchasingPower from "@/components/PurchasingPower";
import CreditCard from "@/components/CreditCard";
import Slogan from "@/components/Slogan";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <main className="font-sans bg-[#fbfbfb]  w-full text-lg">
        <div className="relative pt-3 font-sans bg-gradient-to-br from-[#0C1735] to-white w-full text-lg flex flex-col h-auto md:min-h-screen">
          {/* Header at the top */}
          <Header />

          {/* Main content */}
          <div className="flex flex-col md:flex-row justify-between items-center flex-1 pt-16 pb-16 px-4 md:px-32">
            {/* Presentation component on top for smaller screens */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex">
              <Presentation />
              <img
                className="absolute bottom-0 right-0 w-7/12 md:w-5/12"
                src="/images/Home_BNPL_buy_now_Payer_later_Flexfi.webp"
                alt="Home_BNPL_buy_now_Payer_later_Flexfi"
              />
            </div>
            {/* You can add additional content or adjust layout here if needed */}
          </div>
          <div className="px-12 md:px-32 relative -bottom-16">
            <TokkenBanner />
          </div>
        </div>

        <PurchasingPower />

        <CreditCard />

        <div
          className="bg-cover"
          style={{
            backgroundImage:
              "url('images/Background_buy_now_Payer_later_Flexfi.webp')",
          }}
        >
          <Slogan />
          <FAQFlexFi />
        </div>
      </main>
      <Footer />
    </>
  );
}
