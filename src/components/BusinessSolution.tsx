import { useEffect, useRef, useState } from "react";
import { usePageStore } from "@/store/usePageStore";
import { useLanguageStore } from "@/store/useLanguageStore";
import { GetStartedButton } from "./GetStartedButton";

export const BusinessSolution = () => {
  const { isShopper } = usePageStore();
  const { isEnglish } = useLanguageStore();
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
    <div
      ref={sectionRef}
      className={`bg-black p-6 sm:p-8 md:px-32 rounded-lg shadow-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16 transition-all duration-500`}
    >
      {/* Left section - Phone and Desktop view */}
      <img
        src="/images/flexfi-payment-solution-adaptable-sales-channels-.webp"
        alt="Mobile UI"
        className={`w-80 xl:size-2/4 transform transition duration-500 hover:scale-105 hover:rotate-2 rounded-3xl ${
          isVisible
            ? "motion-preset-slide-right motion-delay-[400ms]"
            : "opacity-0 translate-y-10"
        }`}
      />

      {/* Right section - Information */}
      <div className="text-white lg:w-1/2">
        <h2
          className={`font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-8 lg:mb-12 ${
            isVisible ? "motion-preset-slide-left" : "opacity-0 translate-y-10"
          }`}
        >
          {isEnglish ? "Adaptable Payments" : "Pagos Adaptables"}
          <br /> {isEnglish ? "for Every Channel" : "para Cada Canal"}
        </h2>
        <ul className="space-y-6 flex flex-col gap-1 lg:mb-12">
          <li
            className={`flex items-start ${
              isVisible
                ? "motion-preset-slide-left motion-delay-[450ms]"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h3 className="font-display sm:text-lg font-semibold">
                {!isShopper
                  ? isEnglish
                    ? "E-commerce"
                    : "Comercio Electrónico"
                  : isEnglish
                  ? "Simple and Fast: E-commerce"
                  : "Sencillo y Rápido: Comercio Electrónico"}
              </h3>
              <p className="text-gray-200 text-base sm:text-xl">
                {!isShopper
                  ? isEnglish
                    ? `Fast online payment: your customers complete transactions in less than 10 seconds.`
                    : `Pago rápido en línea: sus clientes completan las transacciones en menos de 10 segundos.`
                  : isEnglish
                  ? "Pay for your online purchases with FlexFi in just a few clicks. Choose your payment plan and split your costs, all in under 10 seconds."
                  : "Pague sus compras en línea con FlexFi en solo unos clics. Elija su plan de pago y divida sus costos, todo en menos de 10 segundos."}
              </p>
            </div>
          </li>
          <li
            className={`flex items-start ${
              isVisible
                ? "motion-preset-slide-left motion-delay-[500ms]"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h3 className="font-display text-base sm:text-lg font-semibold">
                {!isShopper
                  ? isEnglish
                    ? "Point of Sale"
                    : "Punto de Venta"
                  : isEnglish
                  ? "In-Store: Effortless Payment"
                  : "En Tienda: Pago sin Esfuerzo"}
              </h3>
              <p className="text-gray-200 text-base sm:text-xl">
                {!isShopper
                  ? isEnglish
                    ? `Effortless payments via payment link or terminal, directly at your point of sale.`
                    : `Pagos sin esfuerzo a través de enlace o terminal, directamente en su punto de venta.`
                  : isEnglish
                  ? "Use FlexFi in-store via a payment terminal or a secure payment link. Split your payment easily, with no paperwork needed."
                  : "Utilice FlexFi en tienda a través de un terminal de pago o un enlace seguro. Divida su pago fácilmente, sin necesidad de papeleo."}
              </p>
            </div>
          </li>
          <li
            className={`flex items-start ${
              isVisible
                ? "motion-preset-slide-left motion-delay-[600ms]"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h3 className="font-display text-base sm:text-lg font-semibold">
                {!isShopper
                  ? isEnglish
                    ? "Remote Sales"
                    : "Ventas Remotas"
                  : isEnglish
                  ? "Remote Purchases: Convenient and Flexible"
                  : "Compras Remotas: Convenientes y Flexibles"}
              </h3>
              <p className="text-gray-200 text-base sm:text-xl">
                {!isShopper
                  ? isEnglish
                    ? `Your customers receive a payment link via email or SMS, anywhere, anytime.`
                    : `Sus clientes reciben un enlace de pago por correo electrónico o SMS, en cualquier momento y lugar.`
                  : isEnglish
                  ? "Whether you’re buying over the phone or placing a remote order, FlexFi lets you pay through a link sent via email or SMS. Flexibility at your fingertips, wherever you are."
                  : "Ya sea que esté comprando por teléfono o realizando un pedido remoto, FlexFi le permite pagar a través de un enlace enviado por correo electrónico o SMS. Flexibilidad a su alcance, dondequiera que esté."}
              </p>
            </div>
          </li>
        </ul>
        <div
          className={`flex items-start ${
            isVisible
              ? "motion-preset-slide-left motion-delay-[700ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
};
