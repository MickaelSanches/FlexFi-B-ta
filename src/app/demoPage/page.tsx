"use client";

import { useDemoStore } from "@/store/useDemoStore";
import { useDemoViewModel } from "@/viewmodels/useDemoViewModel";
import React, { FormEvent, useState } from "react";
import ReactDOM from "react-dom";

function ProductPage() {
  const [step, setStep] = useState("product");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    instalment,
    setInstalment,
    setAmount,
    paiementStep,
    setPaiementStep,
  } = useDemoStore();

  const product = {
    name: "Ultra HD Television",
    description:
      "Enjoy exceptional image quality with this 55-inch Ultra HD 4K television. Compatible with HDR10+ and Dolby Vision for an immersive experience.",
    price: 599.99,
    image: "/images/tv-hd.webp", // Replace with an actual URL
  };

  const handlePurchase = () => {
    setStep("payment");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const nextPaiementStep = () => {
    setPaiementStep(2);
    setAmount(2);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInstallmentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInstalment(Number(event.target.value));
  };

  const { handleSubmit } = useDemoViewModel();

  const [isLoading, setIsLoading] = useState(false);

  const ModalPaiement = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Empêche le rechargement de la page
      setIsLoading(true);
      handleSubmit(email, password, setIsLoading); // Appelle handleSubmit avec les valeurs appropriées
    };

    return (
      <>
        <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>
        <p className="text-gray-700 text-center mb-6">
          Welcome to FlexFi. Please log in to validate the payment.
        </p>
        <form onSubmit={onSubmit}>
          <div className="mb-4 md:mb-6">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-200 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 md:mb-6">
            <label htmlFor="password" className="block text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-200 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded-lg text-white"
          >
            {isLoading ? "Payment in progress..." : "Pay"}
          </button>
        </form>
      </>
    );
  };

  const Modal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
      <div className="bg-white rounded-lg p-8 w-11/12 max-w-lg shadow-lg">
        {paiementStep == 1 ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Choose Installments
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Select how many installments you want to pay. 0% fees guaranteed!
            </p>
            <div className="flex justify-center items-center mb-6">
              <select
                className="border border-gray-300 rounded-md p-2 text-lg"
                value={instalment}
                onChange={handleInstallmentChange}
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}x
                  </option>
                ))}
              </select>
            </div>
            <p className="text-center text-lg font-semibold mb-6">
              Monthly Payment: €{(product.price / instalment).toFixed(2)}
            </p>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-lg"
              >
                Cancel
              </button>
              <button
                onClick={nextPaiementStep}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg"
              >
                Pay with FlexFi
              </button>
            </div>{" "}
          </>
        ) : (
          <ModalPaiement />
        )}
      </div>
    </div>
  );

  const PaymentOptions = () => (
    <div className="max-w-4xl mx-auto p-8 font-sans text-gray-900 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Order Summary</h1>

      <div className="flex items-center border-b pb-6 mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-cover rounded-md shadow-md mr-6"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <p className="text-2xl font-bold text-yellow-600 mt-4">
            €{product.price.toFixed(2)}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">
        Choose Your Payment Method
      </h2>

      <div className="flex justify-center gap-8 items-start">
        {/* Credit Card Button */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-700 mb-2">Add a credit card</p>
          <button className="w-48 h-12 bg-yellow-500 text-white rounded-md shadow-lg text-lg font-semibold transition-transform transform hover:scale-105">
            Credit Card
          </button>
        </div>

        {/* FlexFi Button */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-700 mb-2">
            Pay in up to 12x installments
          </p>
          <button
            onClick={openModal}
            className="w-48 h-12 bg-[#0D1937] rounded-md shadow-lg text-lg font-semibold flex items-center justify-center transition-transform transform hover:scale-105"
          >
            <img
              className="h-10"
              src="/logo/flexfi-logo.png"
              alt="FlexFi logo"
            />
          </button>
        </div>
      </div>
    </div>
  );

  const Navbar = () => (
    <nav className="bg-blue-500 shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ShopDemo</div>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a href="#" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="py-10 text-black">
        {step === "product" ? (
          <div className="max-w-3xl mx-auto p-6 text-left font-sans bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-lg mx-auto rounded-lg mb-6"
            />
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-semibold mb-6">
              Price: €{product.price.toFixed(2)}
            </p>
            <button
              className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-lg"
              onClick={handlePurchase}
            >
              Buy Now
            </button>
          </div>
        ) : (
          <PaymentOptions />
        )}
      </div>
      {isModalOpen && ReactDOM.createPortal(<Modal />, document.body)}
    </div>
  );
}

export default ProductPage;
