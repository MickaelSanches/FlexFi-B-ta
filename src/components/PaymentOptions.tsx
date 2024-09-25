export const PaymentOptions = () => {
  return (
    <section className="bg-gray-950 py-12">
      <div className="container mx-auto text-center px-6">
        {/* Title Section */}
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-4">
          Flexible Crypto Payment Options
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Simplify your purchases with FlexFi. Pay in multiple installments
          using your favorite cryptocurrencies. Fast, secure, and decentralized.
        </p>

        {/* Payment Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button className="px-6 py-3 bg-[#0C8CF3] text-white font-semibold rounded-lg hover:scale-110 ease-out duration-300">
            Pay in 3x or 6x
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-900 font-semibold rounded-lg hover:scale-110 ease-out duration-300">
            Pay in 10x or 12x
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-900 font-semibold rounded-lg hover:scale-110 ease-out duration-300">
            Staking Rewards
          </button>
        </div>

        {/* Payment Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md flex items-center space-x-6">
            <img
              src="/images/crypto-payment.png" // Replace with actual image path
              alt="Crypto Payment"
              className="w-24 h-24 rounded-full"
            />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Pay in Crypto</h3>
              <p className="text-gray-400">
                Split your payments over several months with the power of
                crypto. Secure, fast, and accessible to all.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-md flex items-center space-x-6">
            <img
              src="/images/staking-rewards.png" // Replace with actual image path
              alt="Staking Rewards"
              className="w-24 h-24 rounded-full"
            />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Earn Staking Rewards</h3>
              <p className="text-gray-400">
                Stake your FlexFi tokens to earn rewards and use them to reduce
                future installment fees.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#00FEFB] to-[#60259E] hover:from-[#85C8FF] hover:to-[#0C8CF3] text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            Get Started with FlexFi
          </button>
        </div>
      </div>
    </section>
  );
};
