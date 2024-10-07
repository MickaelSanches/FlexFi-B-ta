import { GetStartedButton } from "./GetStartedButton";

export const WhyFlexFi = () => {
  return (
    <section className="bg-black py-12 px-4 md:px-32 h-full lg:bg-[url('/images/flexfi-crypto-payment-user-advantages.webp')] lg:bg-contain lg:bg-no-repeat lg:bg-right">
      <div className="container text-center">
        {/* Title Section */}
        <h2 className="font-display text-4xl font-extrabold text-white mb-16 w-full lg:w-1/2 text-left lg:pl-12 mt-20">
          Why Choose FlexFi?
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          {/* Right Section - Benefits */}
          <div className="w-full lg:w-1/2 text-left lg:pl-12">
            <ul className="space-y-6 mb-16">
              <li>
                <h3 className="text-2xl text-white font-bold font-display">
                  Built for Flexibility
                </h3>
                <p className="text-base sm:text-xl">
                  Focus on your business, not the payments. FlexFi offers
                  seamless crypto payment solutions that adapt to your needs,
                  effortlessly.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-white font-display">
                  Ethical and Transparent Payments
                </h3>
                <p className="text-base sm:text-xl">
                  No hidden fees, no penalties. FlexFi empowers users to adjust
                  payment schedules as needed, ensuring fairness and full
                  transparency.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-white font-display">
                  Global Crypto Payment Plans
                </h3>
                <p className="text-base sm:text-xl">
                  FlexFi provides secure, fast, and adaptable crypto payments to
                  meet the needs of a global audience.
                </p>
              </li>
            </ul>

            <GetStartedButton />
          </div>
        </div>
      </div>
    </section>
  );
};
