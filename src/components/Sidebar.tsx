import Link from "next/link";
import { sessionRepository } from "@/repositories/sessionRepository";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";

const Sidebar = () => {
  const { logout } = sessionRepository();
  const pathname = usePathname();
  const { reset, setIsLogged } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false); // État pour afficher/cacher le menu

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    logout();
    reset();
    setIsLogged(false);
  };

  return (
    <>
      {/* Bouton pour ouvrir le menu en haut */}
      <button
        className="fixed top-12 left-0 z-50 p-2 m-2 text-white bg-[#D8E6ED] bg-opacity-80 rounded-md md:hidden {classname} border"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icône burger */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar responsive en plein écran */}
      <div
        className={`flex justify-center  fixed top-0 left-0 h-screen inset-0 bg-[#D8E6ED] text-black z-40 transform rounded-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col md:justify-start`}
      >
        <div className="p-4 border-b border-gray-700 w-full text-center">
          <h2 className="text-2xl font-bold">User Dashboard</h2>
        </div>
        <nav className="flex flex-col space-y-8 mt-8 text-center font-display">
          <Link
            href="/profile"
            className={`p-2 text-lg ${
              isActive("/profile") ? "bg-[#B2D1E0]" : "hover:bg-[#B2D1E0]"
            }`}
            onClick={() => setIsOpen(false)} // Fermer le menu après le clic
          >
            Personal Info
          </Link>
          <Link
            href="/purchases"
            className={`p-2 text-lg ${
              isActive("/purchases") ? "bg-[#B2D1E0]" : "hover:bg-[#B2D1E0]"
            }`}
            onClick={() => setIsOpen(false)} // Fermer le menu après le clic
          >
            My purchases
          </Link>
          <Link
            href="/dashboard"
            className={`p-2 text-lg ${
              isActive("/dashboard") ? "bg-[#B2D1E0]" : "hover:bg-[#B2D1E0]"
            }`}
            onClick={() => setIsOpen(false)} // Fermer le menu après le clic
          >
            Wallet
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false); // Fermer le menu après le clic
            }}
            className="bg-red-500 hover:bg-red-600 p-2 text-lg rounded text-white"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
