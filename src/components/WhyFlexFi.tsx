export const WhyFlexFi = () => {
  return (
    <section
      className="bg-black py-12 px-4 md:px-32 h-full"
      style={{
        backgroundImage:
          "url('/images/flexfi-crypto-payment-user-advantages.webp')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="container text-center">
        {/* Title Section */}
        <h2 className="text-4xl text-start font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-6">
          Why Choose FlexFi?
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Right Section - Benefits */}
          <div className="w-full lg:w-1/2 text-left lg:pl-12">
            <ul className="space-y-6">
              <li>
                <h3 className="text-2xl text-white font-bold">
                  Built for Flexibility
                </h3>
                <p className="text-gray-600">
                  Focus on your business, not the payments. FlexFi offers
                  seamless crypto payment solutions that adapt to your needs,
                  effortlessly.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-white">
                  Ethical and Transparent Payments
                </h3>
                <p className="text-gray-600">
                  No hidden fees, no penalties. FlexFi empowers users to adjust
                  payment schedules as needed, ensuring fairness and full
                  transparency.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-white">
                  Global Crypto Payment Plans
                </h3>
                <p className="text-gray-600">
                  FlexFi provides secure, fast, and adaptable crypto payments to
                  meet the needs of a global audience.
                </p>
              </li>
            </ul>

            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#00FEFB] to-[#60259E] hover:from-[#85C8FF] hover:to-[#0C8CF3] text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              Get Started with FlexFi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
