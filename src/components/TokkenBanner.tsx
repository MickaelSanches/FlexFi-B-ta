const TokkenBanner = () => {
  return (
    <div className="bg-[#D8E6ED] overflow-hidden flex items-center rounded-full p-2">
      {/* Conteneur avec animation */}
      <div className="flex animate-scroll space-x-4 sm:space-x-2 md:space-x-4 lg:space-x-6">
        {/* Images duplicées pour assurer le défilement continu */}
        <img
          className="h-16 sm:h-20 md:h-24 lg:h-24"
          src="/logo/bitcoin_Flexfi.webp"
          alt="Bitcoin"
        />
        <img
          className="h-16 sm:h-20 md:h-24 lg:h-24"
          src="/logo/usdc_Flexfi.webp"
          alt="USDC"
        />
        <img
          className="h-16 sm:h-20 md:h-24 lg:h-24"
          src="/logo/solana_Flexfi.webp"
          alt="Solana"
        />
        <img
          className="h-16 sm:h-20 md:h-24 lg:h-24"
          src="/logo/bitcoin_Flexfi.webp"
          alt="Bitcoin"
        />
        <img
          className="h-16 sm:h-20 md:h-24 lg:h-24"
          src="/logo/usdc_Flexfi.webp"
          alt="USDC"
        />
        <img
          className="h-16 sm:h-20 md:h-24 lg:h-24"
          src="/logo/solana_Flexfi.webp"
          alt="Solana"
        />
        <img
          className="h-16 sm:h-20 md:h-24 lg:h-24"
          src="/logo/bitcoin_Flexfi.webp"
          alt="Bitcoin"
        />
        <img
          className="h-16 sm:h-20 md:h-24 lg:h-24"
          src="/logo/usdc_Flexfi.webp"
          alt="USDC"
        />
      </div>
    </div>
  );
};

export default TokkenBanner;
