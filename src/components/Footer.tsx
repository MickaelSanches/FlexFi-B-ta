"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguageStore } from "@/store/useLanguageStore";

const Footer = () => {
  const { isEnglish } = useLanguageStore();

  return (
    <footer className="bg-[#fbfbfb] text-black py-8 w-full font-sans text-base p-12 ">
      <div className="bg-[#D8E6ED] flex flex-col items-center md:flex-row justify-between md:items-start space-y-8 md:space-y-0 w-full rounded-3xl p-6 md:p-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            src="/logo/flexicon.webp"
            alt="FlexFi Logo"
            width={256}
            height={256}
            className="w-20 h-auto md:w-32"
          />
        </div>

        {/* FlexFi Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h5 className="font-semibold font-display">FlexFi</h5>
          <ul className="space-y-2">
            <li>
              <Link href="/team" className="hover:underline">
                {isEnglish ? "Team" : "Equipo"}
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {isEnglish ? "Support" : "Soporte"}
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h5 className="font-semibold font-display">
            {isEnglish ? "Company" : "Compañía"}
          </h5>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="hover:underline">
                {isEnglish ? "Terms" : "Términos"}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                {isEnglish ? "Privacy" : "Privacidad"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h5 className="font-semibold font-display">
            {isEnglish ? "Resources" : "Recursos"}
          </h5>
          <ul className="space-y-2">
            <li>
              <a
                href="/files/Whitepapper-FlexFi.pdf"
                target="_blank"
                className="hover:underline"
              >
                {isEnglish ? "Whitepaper" : "Libro Blanco"}
              </a>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                {isEnglish ? "Blog" : "Blog"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
          <h5 className="font-semibold font-display">
            {isEnglish ? "Socials" : "Síguenos"}
          </h5>
          <Link
            className="mx-auto"
            href="https://x.com/FlexFi_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo/logo-x.webp"
              alt="Logo X"
              width={40}
              height={40}
              className="w-10 rounded-full mx-auto h-auto"
            />
          </Link>

          <Link
            className="mx-auto"
            href="https://www.linkedin.com/company/flexfiofficial/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo/logo-in.webp"
              alt="Logo LinkedIn"
              width={40}
              height={40}
              className="w-10 rounded-full mx-auto h-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
