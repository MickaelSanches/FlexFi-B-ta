import { useState } from "react";
import FlexFiPaymentSimulator from "./FlexFiPaymentSimulator";
import { GetStartedButton } from "./GetStartedButton";

export const PaymentOptions = () => {
  // State pour suivre l'option active
  const [activeOption, setActiveOption] = useState<
    "3x6x" | "10x12x" | "staking"
  >("3x6x");

  return (
    <section className="relative bg-black h-3/5 flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-32 py-12 pb-0">
      <div className="text-start w-full lg:w-2/5 mb-12 lg:mb-0">
        {/* Title Section */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Flexible Crypto Payment Options
        </h2>
        <p className="text-md sm:text-lg  mb-8">
          Simplify sales with FlexFi. Allow your customers to pay in multiple
          installments using their favorite cryptocurrency.
        </p>

        {/* Payment Buttons */}
        <div className="flex flex-wrap justify-start lg:space-x-4 mb-8 gap-3">
          <button
            className={`px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
              activeOption === "3x6x"
                ? "bg-[#0C8CF3] text-white"
                : "bg-white border border-gray-300 text-gray-900"
            }`}
            onClick={() => setActiveOption("3x6x")}
          >
            Pay in 3x or 6x
          </button>

          <button
            className={`px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
              activeOption === "10x12x"
                ? "bg-[#0C8CF3] text-white"
                : "bg-white border border-gray-300 text-gray-900"
            }`}
            onClick={() => setActiveOption("10x12x")}
          >
            Pay in 10x or 12x
          </button>

          <button
            className={`px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
              activeOption === "staking"
                ? "bg-[#0C8CF3] text-white"
                : "bg-white border border-gray-300 text-gray-900"
            }`}
            onClick={() => setActiveOption("staking")}
          >
            Staking Rewards
          </button>
        </div>

        {/* Payment Info Section */}
        <div className="gap-8 flex flex-col lg:flex-row justify-start">
          {activeOption === "3x6x" && (
            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md flex items-center space-x-4 lg:space-x-6">
              <img
                src="/images/Pay-in-crypto-FlexFi.webp"
                alt="Crypto Payment"
                className="w-16 h-16 sm:w-24 sm:h-24"
              />
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Pay in Crypto (3x or 6x)
                </h3>
                <p>
                  Split your payments over several months with the power of
                  crypto. Secure, fast, and accessible to all.
                </p>
              </div>
            </div>
          )}

          {activeOption === "10x12x" && (
            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md flex items-center space-x-4 lg:space-x-6">
              <img
                src="/images/Pay-in-crypto-FlexFi.webp"
                alt="Crypto Payment"
                className="w-16 h-16 sm:w-24 sm:h-24 "
              />
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Pay in Crypto (10x or 12x)
                </h3>
                <p>
                  Enjoy flexible installment options and spread your payments
                  across up to 12 months.
                </p>
              </div>
            </div>
          )}

          {activeOption === "staking" && (
            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md flex items-center space-x-4 lg:space-x-6">
              <img
                src="/images/Staking-reward-FlexFi.webp"
                alt="Staking Rewards"
                className="w-16 h-16 sm:w-24 sm:h-24 "
              />
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Earn Staking Rewards
                </h3>
                <p>Stake your USDC to earn rewards and unlock the features</p>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <GetStartedButton />
      </div>

      {/* FlexFi Payment Simulator */}
      {/* <FlexFiPaymentSimulator /> */}
      <img
        className="md:w-3/6 md:relative md:right-10 md:bottom-0"
        src="/images/Flexible-crypto-payments-options.webp"
        alt="men"
      />
    </section>
  );
};
