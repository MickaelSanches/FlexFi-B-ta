"use client";
import { useLoginStore } from "@/store/useLoginStore";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const Presentation = () => {
  const { isLogged } = useLoginStore();

  return (
    <section className="container text-start mb-14 w-full max-w-lg">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-4">
        Split your payment with crypto
      </h1>
      {!isLogged && (
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Link
            href="/register"
            className="bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-full hover:scale-110 ease-out duration-300"
          >
            Get Started
          </Link>
          <div className="flex items-center gap-2 sm:gap-0">
            <Link
              href="/register"
              className="px-2 py-3 underline underline-offset-8"
            >
              Log in
            </Link>
            <IoIosArrowForward size={22} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Presentation;
