import { useState } from "react";

export const PaymentOptions = () => {
  // State pour suivre l'option active
  const [activeOption, setActiveOption] = useState<
    "3x6x" | "10x12x" | "staking"
  >("3x6x");

  return (
    <section className="bg-gray-950 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-6">
        {/* Title Section */}
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-4">
          Flexible Crypto Payment Options
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Simplify your purchases with FlexFi. Pay in multiple installments
          using your favorite cryptocurrencies. Fast, secure, and decentralized.
        </p>

        {/* Payment Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            className={`px-6 py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
              activeOption === "3x6x"
                ? "bg-[#0C8CF3] text-white"
                : "bg-white border border-gray-300 text-gray-900"
            }`}
            onClick={() => setActiveOption("3x6x")}
          >
            Pay in 3x or 6x
          </button>

          <button
            className={`px-6 py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
              activeOption === "10x12x"
                ? "bg-[#0C8CF3] text-white"
                : "bg-white border border-gray-300 text-gray-900"
            }`}
            onClick={() => setActiveOption("10x12x")}
          >
            Pay in 10x or 12x
          </button>

          <button
            className={`px-6 py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
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
        <div className="gap-8 flex justify-center">
          {activeOption === "3x6x" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-md flex items-center space-x-6">
              <img
                src="/images/crypto-payment.png" // Remplace avec le chemin de ton image
                alt="Crypto Payment"
                className="w-24 h-24 rounded-full"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold">
                  Pay in Crypto (3x or 6x)
                </h3>
                <p className="text-gray-400">
                  Split your payments over several months with the power of
                  crypto. Secure, fast, and accessible to all.
                </p>
              </div>
            </div>
          )}

          {activeOption === "10x12x" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-md flex items-center space-x-6">
              <img
                src="/images/crypto-payment.png" // Remplace avec le chemin de ton image
                alt="Crypto Payment"
                className="w-24 h-24 rounded-full"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold">
                  Pay in Crypto (10x or 12x)
                </h3>
                <p className="text-gray-400">
                  Enjoy flexible installment options and spread your payments
                  across up to 12 months.
                </p>
              </div>
            </div>
          )}

          {activeOption === "staking" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-md flex items-center space-x-6">
              <img
                src="/images/staking-rewards.png" // Remplace avec le chemin de ton image
                alt="Staking Rewards"
                className="w-24 h-24 rounded-full"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Earn Staking Rewards</h3>
                <p className="text-gray-400">
                  Stake your FlexFi tokens to earn rewards and use them to
                  reduce future installment fees.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#00FEFB] to-[#60259E] hover:from-[#85C8FF] hover:to-[#0C8CF3] text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            Get Started with FlexFi
          </button>
        </div>
      </div>
    </section>
  );
};
