export const BusinessSolution = () => {
  return (
    <div className="bg-slate-800 p-12 rounded-lg shadow-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16">
      {/* Left section - Phone and Desktop view */}
      <div className="relative flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
        <div className="relative">
          <img
            src="/images/phone-mockup.png" // Replace with phone image
            alt="Mobile UI"
            className="w-44 lg:w-52 mb-4 lg:mb-0 lg:mr-8 transform transition duration-500 hover:scale-105 hover:rotate-2"
          />
        </div>
        <div className="relative">
          <img
            src="/images/desktop-mockup.png" // Replace with desktop image
            alt="Desktop UI"
            className="w-full lg:w-96 shadow-xl transform transition duration-500 hover:scale-105 hover:rotate-2"
          />
        </div>
      </div>

      {/* Right section - Information */}
      <div className="text-white lg:w-1/2">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-6">
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
              <h3 className="text-lg font-semibold">E-commerce</h3>
              <p className="text-gray-200">
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
              <h3 className="text-lg font-semibold">Point of Sale</h3>
              <p className="text-gray-200">
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
              <h3 className="text-lg font-semibold">
                Call Center & Remote Sales
              </h3>
              <p className="text-gray-200">
                Your customers receive a payment link via email or SMS.
              </p>
            </div>
          </li>
        </ul>
        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#00FEFB] to-[#60259E] hover:from-[#85C8FF] hover:to-[#0C8CF3] text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          Get Started with Alma
        </button>
      </div>
    </div>
  );
};
