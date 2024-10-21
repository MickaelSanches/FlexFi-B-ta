import { useEffect, useRef, useState } from "react";
import { usePageStore } from "@/store/usePageStore";
import { GetStartedButton } from "./GetStartedButton";

export const BusinessSolution = () => {
  const { isShopper } = usePageStore();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // L'élément est visible, activer l'animation
          }
        });
      },
      { threshold: 0.1 } // 10% visible avant de déclencher
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
          Adaptable Payments
          <br /> for Every Channel
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
                {!isShopper ? "E-commerce" : "Simple and Fast : E-commerce"}
              </h3>
              <p className="text-gray-200 text-base sm:text-xl">
                {!isShopper
                  ? `Fast online payment: your customers complete transactions in
                less than 10 seconds.`
                  : "Pay for your online purchases with FlexFi in just a few clicks. Choose your payment plan and split your costs, all in under 10 seconds."}
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
                {!isShopper ? "Point of Sale" : "In-Store: Effortless Payment"}
              </h3>
              <p className="text-gray-200 text-base sm:text-xl">
                {!isShopper
                  ? `Effortless payments via payment link or terminal, directly at
                your point of sale.`
                  : "Use FlexFi in-store via a payment terminal or a secure payment link. Split your payment easily, with no paperwork needed."}
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
                  ? "Remote Sales"
                  : "Remote Purchases: Convenient and Flexible"}
              </h3>
              <p className="text-gray-200 text-base sm:text-xl">
                {!isShopper
                  ? `Your customers receive a payment link via email or SMS,
                anywhere, anytime.`
                  : `Whether you’re buying over the phone or placing a remote order, FlexFi lets you pay through a link sent via email or SMS. Flexibility at your fingertips, wherever you are.`}
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
