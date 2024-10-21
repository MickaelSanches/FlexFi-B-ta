export const PoweredByBanner = () => {
  const poweredByLogos = ["/logo/logo-STF.webp"];
  const partnerLogos = [
    "/logo/logo-comptacrypto.webp",
    "/logo/solideFi_Logo.webp",
  ];

  return (
    <div className="bg-slate-950 py-4 overflow-hidden flex justify-center items-center">
      <div className="container mx-auto text-center ">
        {/* Section with Powered by and Partners on the same line */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:space-x-16 space-y-10 md:space-y-0">
          {/* Powered by Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-2xl font-extrabold text-white mb-1 mt-5">
              Powered by
            </h2>
            <div className="flex justify-center items-center space-x-8">
              {poweredByLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Powered by Logo ${index + 1}`}
                  className="w-40 h-auto md:h-32 object-contain neon-glow"
                />
              ))}
            </div>
          </div>

          {/* Central logo */}
          <div className="flex justify-center items-center">
            <img
              src="/logo/flexicon.webp"
              alt="logo FlexFi"
              className="h-28 md:h-32 object-contain neon-glow"
            />
          </div>

          {/* Partners Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-2xl font-extrabold text-white mt-6 mb-5 md:mb-0">
              Partner
            </h2>
            <div className="flex justify-center items-center space-x-8 md:space-x-8 space-y-4 md:space-y-0 flex-col md:flex-row">
              {partnerLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="w-80 h-auto md:w-56 md:h-32 object-contain neon-glow"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        .neon-glow {
          filter: drop-shadow(0 0 1px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 1px rgba(0, 255, 255, 0.8));
        }
        .marquee {
          display: flex;
          animation: scroll 15s linear infinite;
        }
        
      `}</style>
    </div>
  );
};
