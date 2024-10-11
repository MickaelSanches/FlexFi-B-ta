const Team = () => {
  return (
    <>
      <img src="/images/Team-BNPL-FlexFi.webp" alt="brain image" />
      <h2 className="font-display absolute right-52 text-9xl bottom-60">
        Team
      </h2>
      <div className="relative bg-black h-3/5 flex flex-col items-start justify-between px-4 md:px-12 lg:px-32">
        <h3 className="font-display mt-20 mb-10 text-6xl">Team</h3>
        <p className="font-display mb-10">
          “A new way to approach payments, <br /> free from the traditional
          constraints of the banking system”.
        </p>
        <div className="flex flex-col gap-6">
          <p>
            We are driven by a simple vision: to make cryptocurrencies
            accessible to everyone. We believe that blockchain technology can
            improve everyday life by enabling more flexible, secure, and
            affordable transactions.
          </p>
          <p>
            Our team is made up of technology and innovation enthusiasts, all
            united by the same mission: to offer consumers and merchants a new
            way to approach payments, free from the traditional constraints of
            the banking system.
          </p>
          <p>
            Together, we push boundaries to provide you with an intuitive,
            transparent platform that meets the needs of today and tomorrow.
          </p>
        </div>
      </div>
      <img
        className="sm:size-3/5 md:size-3/4 mx-auto"
        src="/images/Team-FlexFi.webp"
        alt="team"
      />
    </>
  );
};

export default Team;
