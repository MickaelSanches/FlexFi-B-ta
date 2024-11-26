"use client";

import DashboardLayout from "@/app/dashboard/layout";
import { useState } from "react";
import { sessionRepository } from "@/repositories/sessionRepository";
import { useAuthStore } from "@/store/useAuthStore";

const Profile = () => {
  const { loginForSeedPhrase } = sessionRepository();
  const [showSeedPhrase, setShowSeedPhrase] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {
    email,
    publicKey,
    seedPhrase,
    siren,
    legalCategory,
    mainActivity,
    denomination,
  } = useAuthStore();

  const handleShowPrivateKey = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isLoged = await loginForSeedPhrase(email!, password);
      if (isLoged) {
        setShowSeedPhrase(true);
        setError("");
      }
    } catch {
      setError("Incorrect password.");
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl text-black md:text-4xl mt-8 md:mt-8 font-bold text-gradient mb-4 md:mb-8 font-display">
        My Informations
      </h1>

      <div className="bg-[#D8E6ED] text-black p-4 md:p-8 rounded-lg shadow-lg">
        <div className="mb-4 md:mb-6">
          <p className="text-xs md:text-sm font-display ">Email</p>
          <p className="text-sm md:text-lg">{email || "Not Available"}</p>
        </div>

        {siren && (
          <>
            <div className="mb-4 md:mb-6">
              <p className="text-xs md:text-sm font-display">Company Name</p>
              <p className="text-sm md:text-lg">
                {denomination || "Not Available"}
              </p>
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-xs md:text-sm font-display">Siren</p>
              <p className="text-sm md:text-lg">{siren || "Not Available"}</p>
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-xs md:text-sm font-display">Legal Category</p>
              <p className="text-sm md:text-lg">
                {legalCategory || "Not Available"}
              </p>
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-xs md:text-sm font-display">Main Activity</p>
              <p className="text-sm md:text-lg">
                {mainActivity || "Not Available"}
              </p>
            </div>
          </>
        )}

        <div className="mb-4 md:mb-6">
          <p className="text-xs md:text-sm font-display">Public Key</p>
          <div className="flex flex-wrap items-center space-x-2">
            <p className="text-sm md:text-lg break-all w-full sm:w-auto">
              {publicKey || "Not Available"}
            </p>
            <button
              className="bg-gray-700  p-1 rounded-full focus:outline-none hover:bg-gray-600"
              title="Copy Public Key"
              onClick={() => navigator.clipboard.writeText(publicKey)}
            >
              📋
            </button>
          </div>
        </div>

        <div className="mb-4 md:mb-6">
          <p className="text-xs md:text-sm font-display">Seed Phrase</p>
          {showSeedPhrase ? (
            <p className="text-sm md:text-lg text-[#ff4d4f] break-all">
              {seedPhrase || "Not Available"}
            </p>
          ) : (
            <form onSubmit={handleShowPrivateKey}>
              <div className="flex flex-wrap items-center">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 mt-2 bg-white border-none rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#00FEFB] w-full sm:w-auto"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="submit"
                  className="ml-0 sm:ml-4 mt-2 bg-[#00FEFB] text-black px-4 py-2 rounded-md hover:bg-[#00d8f8] transition duration-300 w-full sm:w-auto"
                >
                  Show Key
                </button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
