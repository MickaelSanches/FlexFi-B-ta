export const PoweredByBanner = () => {
  return (
    <div className="bg-gray-900 py-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-4">
          Powered by
        </h2>

        {/* Logos - Scrolling */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-around animate-scroll space-x-8">
            <img
              src="/logo/logo-STF.webp" // Replace with actual logo paths
              alt="Logo 1"
              className="w-auto h-32 object-contain"
            />
            <img
              src="/logo/logo-STF.webp" // Replace with actual logo paths
              alt="Logo 2"
              className="w-auto h-32 object-contain"
            />
            <img
              src="/logo/logo-STF.webp" // Replace with actual logo paths
              alt="Logo 3"
              className="w-auto h-32 object-contain"
            />
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
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          display: flex;
          white-space: nowrap;
          will-change: transform;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
