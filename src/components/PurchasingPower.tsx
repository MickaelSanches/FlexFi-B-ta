import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const PurchasingPower = () => {
  return (
    <section className="bg-[#fbfbfb] min-h-screen flex flex-col items-center">
      <div className="relative flex flex-col items-center w-full">
        <h2 className="relative font-display text-6xl text-center mx-auto text-black mt-40 motion-preset-slide-right motion-delay-[450ms] z-10">
          INCREASE YOUR <br /> PURCHASING POWER
        </h2>

        <img
          className=" top-20 w-11/12 max-w-7xl h-auto z-0"
          src="/images/Staking_BNPL_buy_now_Payer_later_Flexfi.webp"
          alt="Staking BNPL Flexfi"
        />
      </div>

      {/* Button */}
      <div className="">
        <Link
          href="/register"
          className="relative flex items-center bg-[#00FEFB] text-black font-bold px-6 py-4 rounded-full hover:scale-110 ease-out duration-300 z-10"
        >
          <p className="mr-4 font-display">Simulator</p>
          <IoIosArrowForward size={22} />
        </Link>
      </div>
    </section>
  );
};

export default PurchasingPower;
