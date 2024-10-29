import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const GetStartedButton = () => {
  return (
    <Link href="/register">
      <div className="mt-8">
        <button className="flex items-center px-3 py-3 bg-white text-white font-bold rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
          <span className="absolute -top-2 -right-5  bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md transform rotate-12">
            DevNet
          </span>
          <p className="mr-4 font-display text-black">Get Started</p>
          <IoIosArrowForward className="text-black" size={22} />
        </button>
      </div>
    </Link>
  );
};
