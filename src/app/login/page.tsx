"use client";
import { useLoginViewModel } from "@/viewmodels/useLoginViewModel";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleSubmit,
  } = useLoginViewModel();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-gray-900 border border-gray-800 rounded-lg shadow-lg overflow-hidden mt-8 md:mt-0">
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover"
          style={{
            backgroundImage: "url('/logo/solana-login.jpg')",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-6 md:mb-12">
            Login
          </h2>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
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
            <div className="mb-4 md:mb-6">
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
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 md:py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {loading ? "Connecting..." : "Login"}
              </button>
            </div>
          </form>

          {/* Divider and Google Sign-In */}
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
              onClick={() => {
                console.log("TO DO");
              }}
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
        </div>
      </div>
    </div>
  );
};

export default Login;
