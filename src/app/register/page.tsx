"use client";
import React from "react";
import { useRegisterViewModel } from "../../viewmodels/useRegisterViewModel";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Next.js v13+ for programmatic navigation

const Register = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    acceptPrivacy,
    setAcceptPrivacy,
    confirmationCode,
    setConfirmationCode,
    currentStep,
    handleSubmitEmail,
    handleSubmitCode,
    handleSubmitPassword,
    loading,
    error,
    seedPhrase,
  } = useRegisterViewModel();

  const router = useRouter();


  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-gray-900 border border-gray-800 rounded-lg shadow-lg overflow-hidden mt-8 md:mt-0 md:absolute md:top-60">
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover"
          style={{
            backgroundImage: "url('/logo/solana.jpg')",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-6 md:mb-12">
            Register
          </h2>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          {currentStep === 1 && (
            <form onSubmit={handleSubmitEmail}>
              <div className="mb-4 md:mb-6">
                <label
                  className="block text-gray-200 text-sm md:text-lg font-bold mb-2 md:mb-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center text-gray-200 text-sm md:text-lg">
                  <input
                    type="checkbox"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    className="mr-2"
                  />
                  I accept the{" "}
                  <Link href="/privacy-policy" className="text-blue-500 underline ml-1">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 md:py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  {loading ? "Sending..." : "Send Confirmation Code"}
                </button>
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleSubmitCode}>
              <div className="mb-4 md:mb-6">
                <label
                  className="block text-gray-200 text-sm md:text-lg font-bold mb-2 md:mb-3"
                  htmlFor="confirmationCode"
                >
                  Confirmation Code
                </label>
                <input
                  type="text"
                  id="code"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 md:py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  {loading ? "Verifying..." : "Verify Code"}
                </button>
              </div>
            </form>
          )}

          {currentStep === 3 && (
            <form onSubmit={handleSubmitPassword}>
              <div className="mb-4 mt-4 md:mb-6">
                <label
                  className="block text-gray-200 text-sm md:text-lg font-bold mb-2 md:mb-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4 md:mb-6">
                <label
                  className="block text-gray-200 text-sm md:text-lg font-bold mb-2 md:mb-3"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 md:py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  {loading ? "Setting..." : "Set Password"}
                </button>
              </div>
            </form>
          )}

          {currentStep === 4 && (
            <div className="text-center text-gray-200">
              <h3 className="text-2xl font-bold mb-4">Registration Complete!</h3>
              <p className="mb-4">Your account has been successfully created.</p>
              <p className="mb-4 font-bold text-yellow-400">
                Important: Here is your seed phrase. Please write it down and keep it in a secure place. This phrase is crucial for recovering your account if you lose access to it.
              </p>
              <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
                <p className="font-mono text-lg">&quot;{seedPhrase}&quot;</p>
              </div>
              <p className="mb-4 text-sm text-gray-400">
                Your seed phrase is a unique set of words that acts as the key to your account. Anyone with access to this phrase can access your account, so treat it with care and do not share it with anyone.
              </p>
              <button
                onClick={() => router.push("/login")}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Go to Login
              </button>
            </div>

          )}

          {/* Divider and Google Sign-In */}
          {currentStep === 1 && (
            <>
              <div className="relative mt-6 mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-200">or</span>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => console.log("Google Sign-In")}
                  className="w-full flex items-center justify-center bg-gray-800 text-white font-semibold py-2 md:py-3 rounded-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 border border-gray-700"
                >
                  <img
                    src="/logo/logo-google.png"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Google
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
