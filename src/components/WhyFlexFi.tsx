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
        <h2 className="text-4xl text-start font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-4">
          Why Choose FlexFi?
        </h2>
        <p className="text-lg text-start mb-8">
          Our mission is to empower users globally with flexible, decentralized
          payment options using cryptocurrencies. Our solution stands out in the
          market.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Right Section - Benefits */}
          <div className="w-full lg:w-1/2 text-left lg:pl-12">
            <ul className="space-y-6">
              <li>
                <h3 className="text-2xl text-white font-bold">
                  A Solution Centered on Flexibility
                </h3>
                <p className="text-gray-600">
                  Focus on what matters the most while we handle your payments.
                  FlexFi offers seamless crypto payments with no hassle.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-white">
                  Ethical Approach for All Users
                </h3>
                <p className="text-gray-600">
                  Users can adjust their payment schedule anytime without any
                  hidden fees or penalties, ensuring transparency.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-white">
                  Crypto Payment Plans Across the World
                </h3>
                <p className="text-gray-600">
                  Available in regions across Europe, the Americas, and beyond.
                  Your crypto transactions are secure, quick, and flexible with
                  FlexFi.
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
