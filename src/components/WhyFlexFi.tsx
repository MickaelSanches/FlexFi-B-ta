export const WhyFlexFi = () => {
  return (
    <section className="bg-gray-950 py-12">
      <div className="container mx-auto text-center px-6">
        {/* Title Section */}
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-4">
          Why Choose FlexFi?
        </h2>
        <p className="text-lg mb-8">
          Our mission is to empower users globally with flexible, decentralized
          payment options using cryptocurrencies. Our solution stands out in the
          market.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section - Map/Graphic */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="/images/flexfi-map.png" // Replace with actual map or graphic
              alt="FlexFi in Europe"
              className="w-full object-contain"
            />
          </div>

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

            <button className="mt-8 px-6 py-3 bg-[#0C8CF3] text-white font-semibold rounded-lg hover:bg-[#85C8FF] transition duration-300">
              Get Started with FlexFi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
