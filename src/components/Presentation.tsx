"use client";
import { useLoginStore } from "@/store/useLoginStore";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Presentation = () => {
  const { isLogged } = useLoginStore();

  return (
    <section className="container text-start mb-14 w-full max-w-lg h-72 flex flex-col justify-between">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
        Split your payment with crypto
      </h1>
      {!isLogged && (
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Link
            href="/register"
            className="flex bg-white text-black font-bold px-3 sm:px-3 py-3 rounded-2xl hover:scale-110 ease-out duration-300"
          >
            <p className="mr-4">Get Started</p>
            <IoIosArrowForward size={22} />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Presentation;
