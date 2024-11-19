"use client";

import { useEffect, useRef, useState } from "react";

const CreditCard = () => {
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
      className="sm:mb-96 md:mb-0 text-black px-4 md:px-32 min-h-[90vh]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-12">
        <div className="flex flex-col justify-between  text-center md:text-left mb-8 md:mb-0">
          <h3
            className={`font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl mx-auto text-black mt-12 md:mt-20 z-10 mb-8 ${
              isVisible
                ? "motion-preset-slide-right motion-delay-[300ms]"
                : "opacity-0 translate-y-10"
            } `}
          >
            SPEND <br /> ANYWHERE,
            <br /> ANYTIME
          </h3>
          <p
            className={`text-lg text-left md:text-2xl ${
              isVisible
                ? "motion-preset-slide-right motion-delay-[450ms]"
                : "opacity-0 translate-y-10"
            } `}
          >
            Your credit card like never before <br /> Cheaper, faster and
            flexible
          </p>
        </div>
        <img
          className={`w-full max-w-[100%]  md:max-w-[45%] h-auto ${
            isVisible
              ? "motion-preset-slide-left motion-delay-[400ms]"
              : "opacity-0 translate-y-10"
          }`}
          src="/images/Credit_card_buy_now_Payer_later_Flexfi.webp"
          alt="credit card"
        />
      </div>
      <div className="mb-20">
        <img
          className="w-full max-w-[100%]   mx-auto h-auto"
          src="/images/0_fees_BNPL_buy_now_Payer_later_flexible_payment_solution_Flexfi.webp"
          alt="info card"
        />
      </div>
    </section>
  );
};

export default CreditCard;
