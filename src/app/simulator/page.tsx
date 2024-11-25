"use client";

import FeatureSmartphoneCard from "@/components/FeatureSmartphoneCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResultSimulator from "@/components/ResultSimulator";
import SimulatorCard from "@/components/SimulatorCard";
import StepsContainer from "@/components/StepCard";
import { useState } from "react";

const SimulatorPage = () => {
  // États pour les entrées utilisateur
  const [stakingAmount, setStakingAmount] = useState(100); // Montant staké
  const [capacityToSpend, setCapacityToSpend] = useState(3); // Nombre de paiements mensuels

  // Calcul des résultats
  const stakingEarnings = (stakingAmount * 0.08).toFixed(2); // 8% APR
  const [instalment, setInstalment] = useState(1); // facilité de paiement
  const monthlyPayment = (stakingAmount / instalment).toFixed(2); // Paiement mensuel
  const totalCost = stakingAmount; // Pas de frais pour BNPL

  return (
    <div className="bg-gradient-to-br from-[#0C1735] to-white">
      <Header />
      <div className="bg-white font-sans">
        <h3 className="font-display text-2xl md:text-6xl text-center mx-auto text-black mb-12 md:mb-24 pt-12">
          SIMULATOR
        </h3>

        {/* Section principale */}
        <section className="relative mb-24 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-6 w-full group">
          <FeatureSmartphoneCard
            imageSrc="/images/smartphone1.webp"
            title="STAKING"
            subtitle="Optimize your assets and unlock access to Buy Now Pay Later"
            apr="8% APR"
            aprTextColor="#FFF"
            points={[
              "Unlock access to BNPL with USDC",
              "Increase your spending capacity",
              "$1 staked = $1 available for BNPL",
            ]}
          />
          <FeatureSmartphoneCard
            imageSrc="/images/smartphone2.webp"
            title="BNPL"
            subtitle="Transform your crypto into instant purchasing power"
            apr="0% APR"
            aprTextColor="#00FEFB"
            points={[
              "Fund your wallet to spend",
              "Split your payments from 3 to 12x",
              "Increase your purchasing power",
            ]}
          />
        </section>

        {/* Section promotionnelle */}
        <div className="bg-black font-display text-white py-12 rounded-r-3xl z-50 text-left px-6 md:px-32 w-full md:w-fit mb-12 md:mb-20">
          <h1 className="text-2xl md:text-4xl font-bold uppercase">
            Stake & Buy Now, Pay Later
          </h1>
          <p className="mt-4 font-sans text-sm md:text-lg">
            Simulate your earnings with our payment solution
          </p>
        </div>

        {/* Section simulateur */}
        <section className="flex flex-col items-center mb-24 px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full text-black">
            {/* Staking Card */}
            <SimulatorCard
              instalment={undefined}
              setInstalment={setInstalment}
              title="Staking"
              bgCodeCouleur="#B2D1E0"
              percentage="8%"
              description="Select your amount"
              rangeProps={{
                min: 100,
                max: 250,
                value: stakingAmount,
                onChange: (e) => setStakingAmount(Number(e.target.value)),
              }}
              HowManyPayment={false}
              extraContent={
                <div className="mt-6 flex items-center border-2 border-[#39576C] justify-between bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <input
                    type="number"
                    min="100"
                    max="250"
                    value={stakingAmount}
                    onChange={(e) => setStakingAmount(Number(e.target.value))}
                    placeholder="Enter amount"
                    className="w-full text-center font-display text-sm md:text-xl text-neutral-700 outline-none"
                  />
                  <span className="text-blue-600 text-xl md:text-2xl font-bold ml-2">
                    $
                  </span>
                </div>
              }
            />

            {/* BNPL Card */}
            <SimulatorCard
              instalment={instalment}
              setInstalment={setInstalment}
              title="BNPL"
              bgCodeCouleur="#D8E6ED"
              percentage="0%"
              description="Select your plan (up to 12x)"
              rangeProps={{
                min: 30,
                max: `${stakingAmount}`,
                value: capacityToSpend,
                onChange: (e) => setCapacityToSpend(Number(e.target.value)),
              }}
              HowManyPayment={true}
              extraContent={
                <div className="mt-6 flex items-center justify-between bg-[#39576C] rounded-lg border border-[#39576C] px-4 py-3 shadow-sm">
                  <input
                    type="number"
                    min="1"
                    max={stakingAmount}
                    value={capacityToSpend}
                    onChange={(e) => setCapacityToSpend(Number(e.target.value))}
                    placeholder="Number of payments"
                    className="w-full text-center text-sm md:text-xl text-white bg-[#39576C] font-display outline-none"
                  />
                  <span className="text-blue-600 text-xl md:text-2xl font-bold ml-2">
                    $
                  </span>
                </div>
              }
            />
          </div>

          {/* Résultats */}
          <ResultSimulator
            stakingAmount={stakingAmount}
            stakingEarnings={stakingEarnings}
            monthlyPayment={monthlyPayment}
            totalCost={totalCost}
            instalment={instalment}
          />
        </section>

        {/* Section "How to use" */}
        <div className="flex justify-center mb-12 md:justify-end">
          <div className="bg-black font-display text-white py-12 rounded-l-3xl text-center md:text-right px-6 md:px-32 w-full md:w-fit mb-12 md:mb-20">
            <h1 className="text-2xl md:text-4xl font-bold uppercase">
              how to use flexfi?
            </h1>
          </div>
        </div>

        {/* Section étapes */}
        <StepsContainer />
        <Footer />
      </div>
    </div>
  );
};

export default SimulatorPage;
