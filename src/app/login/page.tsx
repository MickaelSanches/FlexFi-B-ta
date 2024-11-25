"use client";

import { useLoginViewModel } from "@/viewmodels/useLoginViewModel";
import { useState, FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSubmit } = useLoginViewModel();

  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour gérer la soumission du formulaire
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setIsLoading(true);
    handleSubmit(email, password, setIsLoading); // Appelle handleSubmit avec les valeurs appropriées
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0C1735] to-white p-8">
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-white border border-gray-300  rounded-lg shadow-lg overflow-hidden mt-8 md:mt-0">
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-md z-10">
          DevNet
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-start p-0">
          <img
            src="/images/Log-in-FlexFi.webp"
            alt="FlexFi icone"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-6 md:mb-12 font-display">
            Login
          </h2>

          <form onSubmit={onSubmit}>
            <div className="mb-4 md:mb-6">
              <label
                className="block text-black text-sm md:text-lg font-bold mb-2 md:mb-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4 md:mb-6">
              <label
                className="block text-black text-sm md:text-lg font-bold mb-2 md:mb-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-blue-500 text-blackfont-bold py-2 md:py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {isLoading ? "Loading..." : "login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
