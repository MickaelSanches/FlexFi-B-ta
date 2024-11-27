"use client";

import { useEffect } from "react";
import { useWalletStore } from "@/store/useWalletStore";
import { useDashboardViewModel } from "@/viewmodels/useDashboardViewModel";
import { useTransactionStore } from "@/store/useTransactionStore";
import { TransactionList } from "@/components/TransactionList";
import { useAuthStore } from "@/store/useAuthStore";
import { Transaction } from "@/@Types/transaction";

const Dashboard = () => {
  const { onInit } = useDashboardViewModel();
  const { ammount } = useWalletStore();
  const { transactions } = useTransactionStore();
  const { isLogged } = useAuthStore();

  useEffect(() => {
    console.log("Initialisation du Dashboard, islogged = " + isLogged);
    onInit();
  }, []);

  const mockTransactions: Transaction[] = [
    {
      blockTime: 1698472800, // Timestamp en secondes
      meta: {
        preBalances: [5000000000],
        postBalances: [5000000000], // Aucun changement, montant = 0
      },
      transaction: {
        message: {
          accountKeys: ["SenderAddress123", "ReceiverAddress456"],
        },
        signatures: ["abcd1234efgh5678ijkl9012mnop3456qrst7890uvwx"],
      },
    },
    {
      blockTime: 1698472900,
      meta: {
        preBalances: [2222221000000000],
        postBalances: [222000000000], // Argent envoyé, diminution du solde
      },
      transaction: {
        message: {
          accountKeys: ["SenderAddress123", "ReceiverAddress456"],
        },
        signatures: ["mnop3456qrst7890uvwxabcd1234efgh5678ijkl9012"],
      },
    },
    {
      blockTime: 1698473000,
      meta: {
        preBalances: [1500000000],
        postBalances: [1400000000], // Argent envoyé, diminution du solde
      },
      transaction: {
        message: {
          accountKeys: ["SenderAddress123", "ReceiverAddress456"],
        },
        signatures: ["qrst7890uvwxabcd1234efgh5678ijkl9012mnop3456"],
      },
    },
    {
      blockTime: null, // Cas où la date est inconnue
      meta: {
        preBalances: [],
        postBalances: [],
      },
      transaction: {
        message: {
          accountKeys: [],
        },
        signatures: [],
      },
    },
  ];

  return (
    <section className="w-full space-y-12">
      <div className="text-black flex justify-center">
        <div className="">
          <h2 className="text-2xl font-bold mb-6 font-display">My Cards</h2>
          <div className="relative w-1/2 rounded-lg flex items-center justify-center bg-gray-200">
            <img
              src="/images/card-img.webp"
              alt="card"
              className="w-full h-auto object-contain opacity-50"
            />
            <div className="absolute text-center">
              <h3 className="text-xl font-bold text-gray-700 bg-white bg-opacity-50 px-4 py-2 rounded-2xl shadow-md">
                Coming Soon
              </h3>
            </div>
          </div>
        </div>

        {/* My Expense Section */}
        <div className="">
          <h2 className="text-2xl font-bold mb-6 font-display">My Expense</h2>
          <div className="relative w-full h-64 rounded-3xl flex items-center justify-center bg-gray-200 ">
            {/* Image grisée */}
            <img
              className="w-full h-full object-contain opacity-50"
              src="/images/graph-img.webp"
              alt="graph"
            />

            {/* Texte superposé */}
            <div className="absolute text-center">
              <h3 className="text-xl font-bold text-gray-700 bg-white bg-opacity-50 px-4 py-2 rounded-2xl shadow-md">
                Coming Soon
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="w-full">
        <h2 className="text-2xl text-black font-bold mb-6 font-display">
          Balance History
        </h2>
        <TransactionList transactions={transactions} />
      </div>
    </section>
  );
};

export default Dashboard;
