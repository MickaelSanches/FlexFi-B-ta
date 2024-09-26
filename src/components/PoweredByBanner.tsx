export const PoweredByBanner = () => {
  // Liste des logos à afficher
  const logos = [
    "/logo/logo-STF.webp",
    // Ajoute ici les autres logos
  ];

  return (
    <div className="bg-gray-900 py-10">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-6 uppercase tracking-widest">
          Powered by
        </h2>

        {/* Logos - Scrolling */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-around animate-scroll space-x-8">
            {/* Logos dupliqués pour un effet infini */}
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-auto h-24 md:h-32 object-contain neon-glow"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          white-space: nowrap;
          will-change: transform;
          animation: scroll 20s linear infinite;
        }

        .neon-glow {
          filter: drop-shadow(0 0 8px rgba(0, 252, 255, 0.7)) drop-shadow(0 0 16px rgba(0, 252, 255, 0.4));
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .neon-glow:hover {
          transform: scale(1.1);
          filter: drop-shadow(0 0 16px rgba(0, 252, 255, 1)) drop-shadow(0 0 24px rgba(0, 252, 255, 0.8));
        }
      `}</style>
    </div>
  );
};
