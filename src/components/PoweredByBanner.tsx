export const PoweredByBanner = () => {
  const poweredByLogos = ["/logo/logo-STF.webp"];
  const partnerLogos = ["/logo/logo-comptacrypto.webp"];

  return (
    <div className="bg-black py-4 border-t border-b">
      <div className="container mx-auto text-center">
        {/* Section with Powered by and Partners on the same line */}
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center md:space-x-16 space-y-10 md:space-y-0">
          {/* Powered by Section */}
          <div>
            <h2 className="text-2xl md:text-2xl font-extrabold text-white mb-1 ">
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
          <img
            src="/logo/flexicon.webp"
            alt="logo FlexFi"
            className="w-40 h-auto md:h-32 object-contain neon-glow"
          />

          {/* Partners Section */}
          <div>
            <h2 className="text-2xl md:text-2xl font-extrabold text-white mb-1 ">
              Partner
            </h2>
            <div className="flex justify-center items-center space-x-8">
              {partnerLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="w-56 h-auto md:h-32 object-contain neon-glow"
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
      `}</style>
    </div>
  );
};
