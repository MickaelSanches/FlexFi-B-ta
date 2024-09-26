"use client";

import { BusinessSolution } from "@/components/BusinessSolution";
import Presentation from "../components/Presentation";
import { PaymentOptions } from "@/components/PaymentOptions";
import { PoweredByBanner } from "@/components/PoweredByBanner";
import { WhyFlexFi } from "@/components/WhyFlexFi";
import { FAQFlexFi } from "@/components/FAQFlexFi";
// import InfoGrid from "../components/InfoGrid";
// import Roadmap from "../components/Roadmap";
// import Team from "@/components/Team";
// import Link from "next/link";
// import { useLoginStore } from "@/store/useLoginStore";
// import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  // const { isLogged } = useLoginStore();

  return (
    <>
      {/* <ComingSoon /> */}
      <main>
        <div className="bg-gray-950 flex justify-around items-center h-100 pt-32 pb-32 ">
          <Presentation />
          <img
            src="/logo/flexicon.webp"
            alt="FlexFi icone"
            className="h-100 w-auto neon-effect animate-neon-pulse"
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
        <BusinessSolution />
        <PaymentOptions />
        <PoweredByBanner />
        <WhyFlexFi />
        <FAQFlexFi />
      </main>

      {/* <main className="flex flex-col items-center justify-between p-4 sm:pl-20 sm:pr-20 bg-black min-h-screen">
        <Presentation />

        <InfoGrid />

        {!isLogged && (
          <section className="text-center py-16 bg-black w-full">
            <h2 className="text-3xl font-bold text-white mb-8">
              Join FlexFi Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Sign up now and take control of your finances with FlexFi.
            </p>
            <Link
              href="/register"
              className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700"
            >
              Sign Up Now
            </Link>
          </section>
        )}

        <div id="roadmap-section">
          <Roadmap />
        </div>

        <div id="team-section">
          <Team />
        </div>
      </main> */}
    </>
  );
}
