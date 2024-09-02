import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#00fefb] to-black px-4">


      <div className="text-center text-white px-6 py-6 md:px-10 md:py-8 bg-opacity-70 bg-black rounded-2xl md:rounded-3xl shadow-2xl backdrop-blur-lg max-w-sm md:max-w-md mx-auto">
        {/* Logo Placeholder */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <img src="/logo/flexfi-logo.png" alt="FlexFi Logo" className="w-24 md:w-64 h-auto" />
        </div>
        <p className="text-lg md:text-2xl font-semibold mb-6 md:mb-8 tracking-wide">
          Unlock the future of decentralized finance with <span className="text-[#00fefb]">FlexFi</span>.
        </p>
        <p className="text-xs md:text-lg font-light mb-6 md:mb-8 text-gray-300">
          Seamless, secure, and flexible payment solutions tailored for the new era of Web3.
        </p>
        <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-8 md:mb-10">
          <div className="w-3 md:w-4 h-3 md:h-4 bg-[#00fefb] rounded-full animate-bounce"></div>
          <div className="w-3 md:w-4 h-3 md:h-4 bg-[#00d0d6] rounded-full animate-bounce delay-150"></div>
          <div className="w-3 md:w-4 h-3 md:h-4 bg-[#00a0a7] rounded-full animate-bounce delay-300"></div>
        </div>
        <p className="text-xs md:text-sm text-gray-400">
          Coming soon: A revolutionary platform that merges blockchain technology with cutting-edge financial tools. Stay tuned for multi-payment options, cashback, and more.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
