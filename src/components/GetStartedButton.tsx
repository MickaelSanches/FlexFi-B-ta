import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const GetStartedButton = () => {
  return (
    <Link href="/register">
      <div className="mt-8">
        <button className="flex items-center px-3 py-3 bg-gradient-to-r from-[#00FEFB] to-[#60259E] hover:from-[#85C8FF] hover:to-[#0C8CF3] text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <p className="mr-4 font-display">Get Started</p>
          <IoIosArrowForward size={22} />
        </button>
      </div>
    </Link>
  );
};
