import { useLoginStore } from "@/store/useLoginStore";
import { useLanguageStore } from "@/store/useLanguageStore";
import { IoIosArrowForward } from "react-icons/io";

const Presentation = () => {
  const { isLogged } = useLoginStore();
  const { isEnglish } = useLanguageStore();

  return (
    <section className="container w-60 justify-center text-start mb-14 md:w-full max-w-1xl h-72 flex flex-col md:justify-between">
      <h1 className="text-3xl sm:text-4xl md:text-7xl text-white mb-4 font-display motion-preset-slide-right motion-delay-[700ms]">
        {isEnglish
          ? "SPLIT YOUR PAYMENT WITH CRYPTO"
          : "DIVIDE TU PAGO CON CRIPTO"}
      </h1>
      {!isLogged && (
        <div className="flex flex-col sm:flex-row gap-4 justify-start motion-preset-slide-right motion-delay-[800ms]">
          <button
            disabled
            className="relative flex items-center bg-[#00FEFB] text-black font-bold px-6 py-4 rounded-full hover:scale-110 ease-out duration-300"
          >
            <span className="absolute -bottom-1 -right-1 transform bg-white text-black font-bold font-display text-xs px-1 py-0.5 rounded-full">
              comming soon
            </span>
            <p className="mr-4 font-display">
              {isEnglish ? "Download App" : "Descarga aplicación"}
            </p>
            <IoIosArrowForward size={22} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Presentation;
