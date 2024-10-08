import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 w-full border-t-8 border-[#00FEFB] font-sans text-base sm:text-xl">
      <div className="  px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 w-full md:px-32">
        {/* FlexFi Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h5 className="text-white font-semibold font-display">FlexFi</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h5 className="text-white font-semibold font-display">Resources</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Whitepaper
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                API Reference
              </a>
            </li> */}
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/logo/flexicon.webp"
            alt="FlexFi Logo"
            width={64}
            height={64}
          />
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center space-y-4 text-center md:text-right">
          <h5 className="text-white font-semibold font-display">Follow Us</h5>
          <Link href={"https://x.com/FlexFi_"} className="text-gray-400">
            <img
              src="/logo/logo-x.webp"
              alt="logo x"
              className="w-10 rounded-full h-auto"
            />
          </Link>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-8 border-t border-gray-700 pt-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center pl-8 pr-8">
          <p className="text-sm text-gray-400">
            © 2024 FlexFi. All rights reserved
          </p>
          <div className="space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
