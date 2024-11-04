import { useEffect, useRef, useState } from "react";
import FlexFiPaymentSimulator from "./FlexFiPaymentSimulator";
import { usePageStore } from "@/store/usePageStore";
import { useLanguageStore } from "@/store/useLanguageStore";

export const PaymentOptions = () => {
  const { isShopper } = usePageStore();
  const { isEnglish } = useLanguageStore();

  const [activeOption, setActiveOption] = useState<"6x12x" | "staking">(
    "6x12x"
  );
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
      className="relative bg-black h-3/5 flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-32 py-12 pb-0 pt-0"
    >
      <div className="flex flex-col items-center justify-center text-start w-full lg:w-2/5 mb-12 lg:mb-0">
        {/* Title Section */}
        <h2
          className={`font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 lg:mb-12 ${
            isVisible
              ? "motion-preset-slide-right motion-delay-[400ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          {isEnglish
            ? "Flexible Crypto Payment Options"
            : "Opciones de Pago Cripto Flexibles"}
        </h2>
        <p
          className={`text-base sm:text-xl mb-8 ${
            isVisible
              ? "motion-preset-slide-right motion-delay-[500ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          {!isShopper
            ? isEnglish
              ? `Simplify sales with FlexFi. Allow your customers to pay in multiple installments using their favorite cryptocurrency.`
              : `Simplifique las ventas con FlexFi. Permita a sus clientes pagar en varias cuotas utilizando su criptomoneda favorita.`
            : isEnglish
            ? `Simplify your purchase with FlexFi. Pay in multiple installments using your favorite crypto.`
            : `Simplifique su compra con FlexFi. Pague en varias cuotas utilizando su cripto favorita.`}
        </p>

        {/* Payment Buttons */}
        <div className="flex flex-wrap flex-col md:flex-row justify-start md:justify-center lg:space-x-4 mb-8 gap-3">
          <button
            className={`px-2 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
              activeOption === "6x12x"
                ? "bg-gradient-to-r from-[#00FEFB] to-[#60259E] text-white"
                : "bg-white border border-gray-300 text-gray-900"
            } ${
              isVisible
                ? "motion-preset-slide-right motion-delay-[600ms]"
                : "opacity-0 translate-y-10"
            }`}
            onClick={() => setActiveOption("6x12x")}
          >
            {isEnglish ? "Pay in 6x or 12x" : "Pagar en 6x o 12x"}
          </button>

          <button
            className={`px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 ${
              activeOption === "staking"
                ? "bg-gradient-to-r from-[#00FEFB] to-[#60259E] text-white"
                : "bg-white border border-gray-300 text-gray-900"
            } ${
              isVisible
                ? "motion-preset-slide-right motion-delay-[650ms]"
                : "opacity-0 translate-y-10"
            }`}
            onClick={() => setActiveOption("staking")}
          >
            {isEnglish ? "Staking Rewards" : "Recompensas de Staking"}
          </button>

          <button
            className={`px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg hover:scale-110 ease-out duration-300 bg-white border border-gray-300 text-gray-900 ${
              isVisible
                ? "motion-preset-slide-right motion-delay-[700ms]"
                : "opacity-0 translate-y-10"
            }`}
            onClick={() => {
              const modal = document.getElementById("my_modal_3");
              if (modal) {
                (modal as HTMLDialogElement).showModal();
              }
            }}
          >
            {isEnglish ? "Simulation" : "Simulación"}
          </button>
          <dialog id="my_modal_3" className="modal bg-zinc-900 rounded-2xl">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle text-white btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <FlexFiPaymentSimulator />
            </div>
          </dialog>
        </div>

        {/* Payment Info Section */}
        <div
          className={`gap-8 flex flex-col lg:flex-row justify-start ${
            isVisible
              ? "motion-preset-slide-right motion-delay-[800ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          {activeOption === "6x12x" && (
            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md flex items-center space-x-4 lg:space-x-6">
              <img
                src="/images/Pay-in-crypto-FlexFi.webp"
                alt="Crypto Payment"
                className="w-16 h-16 sm:w-24 sm:h-24"
              />
              <div className="text-left">
                <h3 className="text-lg font-display sm:text-xl font-semibold">
                  {isEnglish
                    ? "Pay in Crypto (6x or 12x)"
                    : "Paga en Cripto (6x o 12x)"}
                </h3>
                <p>
                  {isEnglish
                    ? "Split your payments over several months with the power of crypto. Secure, fast, and accessible to all."
                    : "Divida sus pagos en varios meses con el poder de la cripto. Seguro, rápido y accesible para todos."}
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
                  {isEnglish
                    ? "Earn Staking Rewards"
                    : "Gana Recompensas de Staking"}
                </h3>
                <p>
                  {isEnglish
                    ? "Stake your USDC to earn rewards and unlock the features."
                    : "Haga staking de su USDC para ganar recompensas y desbloquear funciones."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <img
        className="w-80 md:w-3/6 md:absolut md:right-0 bottom-0"
        src="/images/Flexible-crypto-payments-options.webp"
        alt="men"
      />
    </section>
  );
};
