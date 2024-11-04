import React, { useState } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

const FlexFiPaymentSimulator: React.FC = () => {
  const { isEnglish } = useLanguageStore();
  const [amount, setAmount] = useState<number>(100); // Valeur initiale
  const [months, setMonths] = useState<number>(6); // Valeur par défaut à 6 mois

  // Fonction pour calculer les frais de BNPL (Buy Now Pay Later)
  const calculateFees = (amount: number, months: number) => {
    if (months !== 6 && months !== 12) {
      throw new Error(
        "Invalid payment duration. Choose either 6 or 12 months."
      );
    }

    // Calcul des frais pour le client (1.5%)
    const shopperTotal = amount * 1.015;
    const monthlyPaymentShopper = shopperTotal / months;

    // Calcul des frais pour le commerçant (2%)
    const merchantReceives = amount * 0.98; // Le commerçant reçoit 98% du montant initial

    return {
      totalCostShopper: shopperTotal.toFixed(2),
      monthlyPaymentShopper: monthlyPaymentShopper.toFixed(2),
      merchantReceives: merchantReceives.toFixed(2),
    };
  };

  const { totalCostShopper, monthlyPaymentShopper, merchantReceives } =
    calculateFees(amount, months);

  return (
    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg max-w-md">
      <h2 className="font-display text-2xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-4">
        {isEnglish ? "FlexFi Payment Simulator" : "Simulador de Pago FlexFi"}
      </h2>

      {/* Montant du paiement */}
      <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-display text-[#85C8FF] font-semibold text-lg mb-2">
          {isEnglish ? "Payment Amount" : "Monto del Pago"}
        </h3>
        <p className="text-md text-gray-300 mb-2">
          {isEnglish
            ? "Simulate your fees with multi-installment payment options."
            : "Simula tus tarifas con opciones de pago en cuotas."}
        </p>
        <input
          type="range"
          min="10"
          max="2000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full mb-4"
        />
        <div className="flex justify-between text-md font-display">
          <span>$10</span>
          <span>$2000</span>
        </div>
        <p className="font-display text-center text-xl font-semibold text-white mt-4">
          {amount.toFixed(2)} $
        </p>
      </div>

      {/* Durée du paiement (6 ou 12 mois) */}
      <div className="mb-4">
        <h3 className="font-display text-[#85C8FF] font-semibold text-lg mb-2">
          {isEnglish ? "Payment Duration" : "Duración del Pago"}
        </h3>
        <div className="flex justify-center space-x-4 font-display">
          <button
            onClick={() => setMonths(6)}
            className={`px-4 py-2 ${
              months === 6 ? "bg-[#0C8CF3]" : "bg-gray-600"
            } text-white rounded-lg`}
          >
            {isEnglish ? "6 months" : "6 meses"}
          </button>
          <button
            onClick={() => setMonths(12)}
            className={`px-4 py-2 ${
              months === 12 ? "bg-[#0C8CF3]" : "bg-gray-600"
            } text-white rounded-lg`}
          >
            {isEnglish ? "12 months" : "12 meses"}
          </button>
        </div>
      </div>

      {/* Affichage des frais */}
      <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold text-lg mb-2 font-display text-[#85C8FF]">
          {isEnglish ? "Fees Breakdown" : "Desglose de Tarifas"}
        </h3>

        <div className="text-md flex justify-between items-center mb-2">
          <span className="text-white">
            {isEnglish ? "Total Cost (Client):" : "Costo Total (Cliente):"}
          </span>
          <span className="text-white text-lg font-display">
            ${totalCostShopper}
          </span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-white ">
            {isEnglish
              ? "Monthly Payment (Client):"
              : "Pago Mensual (Cliente):"}
          </span>
          <span className="text-[#00FEFB] text-lg font-display">
            ${monthlyPaymentShopper} / {isEnglish ? "month" : "mes"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white">
            {isEnglish ? "Merchant Receives:" : "El Comerciante Recibe:"}
          </span>
          <span className="text-white text-lg font-display">
            ${merchantReceives}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlexFiPaymentSimulator;
