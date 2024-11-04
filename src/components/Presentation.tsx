import { useLoginStore } from "@/store/useLoginStore";
import { useLanguageStore } from "@/store/useLanguageStore";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Presentation = () => {
  const { isLogged } = useLoginStore();
  const { isEnglish } = useLanguageStore();

  return (
    <section className="container w-60 justify-center text-start mb-14 md:w-full max-w-lg h-72 flex flex-col md:justify-between">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 font-display motion-preset-slide-right motion-delay-[700ms]">
        {isEnglish
          ? "Split your payment with crypto"
          : "Divide tu pago con cripto"}
      </h1>
      {!isLogged && (
        <div className="flex flex-col sm:flex-row gap-4 justify-start motion-preset-slide-right motion-delay-[800ms]">
          <Link
            href="/register"
            className="relative flex items-center bg-white text-black font-bold px-3 sm:px-3 py-3 rounded-2xl hover:scale-110 ease-out duration-300"
          >
            <span className="absolute -top-2 -right-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md transform rotate-12">
              DevNet
            </span>
            <p className="mr-4 font-bold font-display">
              {isEnglish ? "Get Started" : "Comenzar"}
            </p>
            <IoIosArrowForward size={22} />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Presentation;
