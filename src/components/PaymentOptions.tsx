import { useState } from "react";
import FlexFiPaymentSimulator from "./FlexFiPaymentSimulator";

export const PaymentOptions = () => {
  // State pour suivre l'option active
  const [activeOption, setActiveOption] = useState<"6x12x" | "staking">(
    "6x12x"
  );

  return (
    <section className="relative bg-black h-3/5 flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-32 py-12 pb-0 pt-0">
      <div className="flex flex-col items-center justify-center text-start w-full lg:w-2/5 mb-12 lg:mb-0">
        {/* Title Section */}
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 lg:mb-12">
          Flexible Crypto Payment Options
        </h2>
        <p className="text-base sm:text-xl  mb-8">
          Simplify sales with FlexFi. Allow your customers to pay in multiple
          installments using their favorite cryptocurrency.
        </p>

        {/* Payment Buttons */}
        <div className="flex flex-wrap flex-col md:flex-row justify-start md:justify-center lg:space-x-4 mb-8 gap-3">
          <button
            className={`px-2 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
              activeOption === "6x12x"
                ? "bg-gradient-to-r from-[#00FEFB] to-[#60259E] text-white"
                : "bg-white border border-gray-300 text-gray-900"
            }`}
            onClick={() => setActiveOption("6x12x")}
          >
            Pay in 6x or 12x
          </button>

          <button
            className={`px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
              activeOption === "staking"
                ? "bg-gradient-to-r from-[#00FEFB] to-[#60259E] text-white"
                : "bg-white border border-gray-300 text-gray-900"
            }`}
            onClick={() => setActiveOption("staking")}
          >
            Staking Rewards
          </button>

          <button
            className={`px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 bg-white border border-gray-300 text-gray-900`}
            onClick={() => {
              const modal = document.getElementById("my_modal_3");
              if (modal) {
                (modal as HTMLDialogElement).showModal(); // TypeScript a besoin de savoir que c'est un élément de type <dialog>
              }
            }}
          >
            Simulation
          </button>
          <dialog id="my_modal_3" className="modal bg-zinc-900 rounded-2xl">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle text-white btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <FlexFiPaymentSimulator />
            </div>
          </dialog>
        </div>

        {/* Payment Info Section */}
        <div className="gap-8 flex flex-col lg:flex-row justify-start">
          {activeOption === "6x12x" && (
            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md flex items-center space-x-4 lg:space-x-6">
              <img
                src="/images/Pay-in-crypto-FlexFi.webp"
                alt="Crypto Payment"
                className="w-16 h-16 sm:w-24 sm:h-24"
              />
              <div className="text-left">
                <h3 className="text-lg font-display sm:text-xl font-semibold">
                  Pay in Crypto (6x or 12x)
                </h3>
                <p>
                  Split your payments over several months with the power of
                  crypto. Secure, fast, and accessible to all.
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
                <h3 className="text-lg font-display sm:text-xl font-semibold">
                  Earn Staking Rewards
                </h3>
                <p>Stake your USDC to earn rewards and unlock the features</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FlexFi Payment Simulator */}
      {/* <FlexFiPaymentSimulator /> */}
      <img
        className="w-80 md:w-3/6 md:absolut md:right-0 bottom-0"
        src="/images/Flexible-crypto-payments-options.webp"
        alt="men"
      />

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    </section>
  );
};
