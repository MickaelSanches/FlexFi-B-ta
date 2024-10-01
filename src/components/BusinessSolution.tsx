export const BusinessSolution = () => {
  return (
    <div className=" bg-gray-900 p-6 sm:p-8 md:px-32 rounded-lg shadow-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16">
      {/* Left section - Phone and Desktop view */}
      <img
        src="/images/flexfi-payment-solution-adaptable-sales-channels_1.webp"
        alt="Mobile UI"
        className="  w-80 xl:w-1/3 transform transition duration-500 hover:scale-105 hover:rotate-2 rounded-3xl"
      />

      {/* Right section - Information */}
      <div className="text-white lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-6">
          A solution that adapts to your sales channels
        </h2>
        <ul className="space-y-6">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00FEFB] text-white flex items-center justify-center mr-4">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">E-commerce</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Your customers pay online in less than 10 seconds without
                leaving your website.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#85C8FF] text-white flex items-center justify-center mr-4">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                Point of Sale
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Your customers pay via a payment link or on a payment terminal.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0C8CF3] text-white flex items-center justify-center mr-4">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                Call Center & Remote Sales
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Your customers receive a payment link via email or SMS.
              </p>
            </div>
          </li>
        </ul>
        <button className="mt-8 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#00FEFB] to-[#60259E] hover:from-[#85C8FF] hover:to-[#0C8CF3] text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          Get Started with FlexFi
        </button>
      </div>
    </div>
  );
};
