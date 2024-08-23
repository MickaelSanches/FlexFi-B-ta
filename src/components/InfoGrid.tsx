export const InfoGrid = () => {
  return (
    <section className="w-full  shadow  text-center py-10 bg-gray-900 rounded-3xl mb-8">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-8">

        {/* First Row: Staking and Logo */}
        <div className="md:col-span-3  bg-black shadow-lg rounded-3xl p-8 transform transition-transform duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2M12 17v-1a3 3 0 013-3h1.5a3 3 0 110 6H15a3 3 0 01-3-3v-1z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white ml-4">Staking</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Enjoy premium rewards by staking your assets in the FlexFi ecosystem. Maximize your returns while contributing to network stability.
          </p>
        </div>

        <div className="md:col-span-1 bg-black shadow-lg rounded-3xl flex items-center justify-center p-8 transform transition-transform duration-300">
          <img src="/logo/flexfi-logo.png" alt="FLEX Logo" className="max-w-full h-auto" />
        </div>

        {/* Second Row: Bonds and Additional Information */}
        <div className="md:col-span-2 bg-black shadow-lg rounded-3xl p-8 transform transition-transform duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-green-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1V9a2 2 0 012-2h0a2 2 0 012 2v7zM7 16h1v-4H7v4zm6-8a1 1 0 10-2 0 1 1 0 002 0zm5 8h-1v-4h-1v4zm-2-6h1a2 2 0 012 2v4h1v-4a3 3 0 00-3-3h-1zm-5 6h1a1 1 0 110 2h-1a1 1 0 010-2zM7 14H6a2 2 0 00-2 2v4H3v-4a3 3 0 013-3h1z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white ml-4">Bonds</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Explore the world of yield tokens by purchasing bonds at a discount compared to the market price. A simple and effective way to invest in decentralized finance.
          </p>
        </div>

        <div className="md:col-span-2 bg-black shadow-lg rounded-3xl p-8 transform transition-transform duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-purple-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zM12 4c2.211 0 4 1.789 4 4s-1.789 4-4 4-4-1.789-4-4 1.789-4 4-4zm0 16c-4.41 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white ml-4">Additional Information</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Learn more about our services and how you can make the most of the FlexFi ecosystem.
          </p>
        </div>

        {/* Third Row: Ecosystem Protocols */}
        <div className="md:col-span-4 bg-black shadow-lg rounded-3xl p-8 transform transition-transform duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-red-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.293 9.293a1 1 0 011.414 0L12 11.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM5 18h14v2H5v-2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white ml-4">Ecosystem Protocols</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Our ecosystem is designed for sustainability and scalability, integrating advanced protocols for enhanced security and performance. Enjoy a robust infrastructure to maximize your returns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoGrid