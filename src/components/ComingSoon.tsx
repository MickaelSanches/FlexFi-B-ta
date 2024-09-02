import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-black">
      <div className="text-center text-white px-10 py-8 bg-opacity-70 bg-black rounded-3xl shadow-2xl backdrop-blur-lg max-w-md mx-auto">
        {/* Logo Placeholder */}
        <div className="mb-8 flex justify-center">
          <img src="/logo/flexfi-logo.png" alt="FlexFi Logo" className="w-100 h-auto" />
        </div>
        <p className="text-xl md:text-2xl font-medium mb-8 tracking-wide">
          Unlock the future of decentralized finance with <span className="text-purple-400">FlexFi</span>.
        </p>
        <p className="text-sm md:text-lg font-light mb-8">
          Seamless, secure, and flexible payment solutions tailored for the new era of Web3.
        </p>
        <div className="flex items-center justify-center space-x-3 mb-10">
          <div className="w-4 h-4 bg-teal-400 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-300"></div>
        </div>
        <p className="text-sm text-gray-400">
          Coming soon: A revolutionary platform that merges blockchain technology with cutting-edge financial tools. Stay tuned for multi-payment options, cashback, and more.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
