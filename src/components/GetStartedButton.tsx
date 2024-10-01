import { IoIosArrowForward } from "react-icons/io";

export const GetStartedButton = () => {
  return (
    <div className="mt-8">
      <button className="px-6 py-3 bg-gradient-to-r from-[#00FEFB] to-[#60259E] hover:from-[#85C8FF] hover:to-[#0C8CF3] text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        Get Started with FlexFi
      </button>
      <IoIosArrowForward size={22} />
    </div>
  );
};
