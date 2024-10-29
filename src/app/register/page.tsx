"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRegisterViewModel } from "@/viewmodels/useRegisterViewModel";

const Register = () => {
  const router = useRouter();

  // États locaux du composant
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [seedPhrase, setSeedPhrase] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [error, setError] = useState("");
  const [isPro, setIsPro] = useState(false);

  const [siren, setSiren] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { submitEmail, submitCode, submitPassword, submitProfessionalInfo } =
    useRegisterViewModel();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-gray-900 border border-gray-800 rounded-lg shadow-lg overflow-hidden mt-8 md:mt-0">
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-md z-50">
          DevNet
        </div>

        <div className="flex items-center justify-start w-full md:w-1/2 p-0">
          <img
            src="/images/Sign-up-FlexFi.webp"
            alt="FlexFi icone"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-6 md:mb-12 font-display">
            Register
          </h2>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          {currentStep === 5 && (
            <div className="text-center text-gray-200 mb-12">
              {" "}
              {/* Added margin-bottom */}
              <h3 className="text-2xl font-bold mb-4">
                Registration Complete!
              </h3>
              <p className="mb-4">
                Your account has been successfully created.
              </p>
              <p className="mb-4 font-bold text-yellow-400">
                Important: Here is your seed phrase and wallet address. Please
                write them down and keep them in a secure place.
              </p>
              <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
                <p className="font-mono text-lg">{seedPhrase}</p>
              </div>
              <p className="mb-4 font-bold text-yellow-400">
                Wallet Public Address:
              </p>
              <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-auto">
                <p className="font-mono text-lg break-all">{publicKey}</p>
              </div>
              <p className="mb-4 text-sm text-gray-400">
                Your seed phrase is a unique set of words that acts as the key
                to your account. Anyone with access to this phrase can access
                your account, so treat it with care and do not share it with
                anyone.
              </p>
              <button
                onClick={() => router.push("/login")}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Go to Login
              </button>
            </div>
          )}

          {currentStep === 1 && (
            <form
              onSubmit={(e) =>
                submitEmail(
                  e,
                  email,
                  acceptPrivacy,
                  setError,
                  setCurrentStep,
                  setIsLoading
                )
              }
            >
              <div className="mb-4">
                <label
                  className="block text-gray-200 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 text-gray-200 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center text-gray-200">
                  <input
                    type="checkbox"
                    checked={isPro}
                    onChange={(e) => setIsPro(e.target.checked)}
                    className="mr-2"
                  />
                  Register as a professional
                </label>
              </div>

              <div className="mb-4">
                <label className="flex items-center text-gray-200">
                  <input
                    type="checkbox"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    className="mr-2"
                  />
                  I accept the{" "}
                  <Link
                    href="/privacy"
                    className="text-blue-500 ml-1 underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg">
                {isLoading ? "Loading..." : "Send Confirmation Code"}
              </button>
            </form>
          )}

          {currentStep === 2 && (
            <form
              onSubmit={(e) =>
                submitCode(
                  e,
                  email,
                  confirmationCode,
                  setError,
                  setCurrentStep,
                  setIsLoading
                )
              }
            >
              <div className="mb-4">
                <label
                  className="block text-gray-200 font-bold mb-2"
                  htmlFor="code"
                >
                  Confirmation Code
                </label>
                <input
                  type="text"
                  id="code"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 text-gray-200 border rounded-lg"
                  required
                />
              </div>
              <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg">
                {isLoading ? "Loading..." : "Verify Code"}
              </button>
            </form>
          )}

          {currentStep === 4 && (
            <form
              onSubmit={(e) =>
                submitPassword(
                  e,
                  email,
                  password,
                  confirmPassword,
                  siren,
                  isPro,
                  setError,
                  setCurrentStep,
                  setSeedPhrase,
                  setPublicKey
                )
              }
            >
              <div className="mb-4">
                <label
                  className="block text-gray-200 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 text-gray-200 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-200 font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 text-gray-200 border rounded-lg"
                  required
                />
              </div>
              <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg">
                Set Password
              </button>
            </form>
          )}

          {currentStep === 3 && isPro && (
            <form
              onSubmit={(e) => {
                submitProfessionalInfo(e, setCurrentStep);
              }}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-200 font-bold mb-2"
                  htmlFor="siren"
                >
                  SIREN
                </label>
                <input
                  type="text"
                  id="siren"
                  value={siren}
                  onChange={(e) => setSiren(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 text-gray-200 border rounded-lg"
                  required
                />
              </div>

              <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg">
                Continue to Final Step
              </button>
            </form>
          )}

          {currentStep === 3 && !isPro && (
            <div>
              {/* Si l'utilisateur n'est pas un professionnel, passe directement à l'étape suivante */}
              <button
                onClick={() => setCurrentStep(4)}
                className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg"
              >
                Continue to Final Step
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
