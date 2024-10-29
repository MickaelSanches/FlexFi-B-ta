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
      <h1 className="text-3xl md:text-4xl mt-8 md:mt-8 font-bold text-gradient mb-4 md:mb-8">
        Personal Information
      </h1>

      <div className="bg-slate-900 p-4 md:p-8 rounded-lg shadow-lg">
        <div className="mb-4 md:mb-6">
          <p className="text-xs md:text-sm text-gray-300 uppercase">Email</p>
          <p className="text-xl md:text-2xl font-bold text-white">
            {email || "Not Available"}
          </p>
        </div>

        {siren && (
          <>
            <div className="mb-4 md:mb-6">
              <p className="text-xs md:text-sm text-gray-300 uppercase">
                Company Name
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                {denomination || "Not Available"}
              </p>
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-xs md:text-sm text-gray-300 uppercase">
                Siren
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                {siren || "Not Available"}
              </p>
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-xs md:text-sm text-gray-300 uppercase">
                Legal Category
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                {legalCategory || "Not Available"}
              </p>
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-xs md:text-sm text-gray-300 uppercase">
                Main Activity
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                {mainActivity || "Not Available"}
              </p>
            </div>
          </>
        )}

        <div className="mb-4 md:mb-6">
          <p className="text-xs md:text-sm text-gray-300 uppercase">
            Public Key
          </p>
          <div className="flex flex-wrap items-center space-x-2">
            <p className="text-sm md:text-lg font-mono text-[#00FEFB] break-all w-full sm:w-auto">
              {publicKey || "Not Available"}
            </p>
            <button
              className="bg-gray-700 text-gray-300 p-1 rounded-full focus:outline-none hover:bg-gray-600"
              title="Copy Public Key"
              onClick={() => navigator.clipboard.writeText(publicKey)}
            >
              📋
            </button>
          </div>
        </div>

        <div className="mb-4 md:mb-6">
          <p className="text-xs md:text-sm text-gray-300 uppercase">
            Seed Phrase
          </p>
          {showSeedPhrase ? (
            <p className="text-sm md:text-lg font-mono text-[#ff4d4f] break-all">
              {seedPhrase || "Not Available"}
            </p>
          ) : (
            <form onSubmit={handleShowPrivateKey}>
              <div className="flex flex-wrap items-center">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 mt-2 bg-[#2b2b2b] border-none rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#00FEFB] w-full sm:w-auto"
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
