"use client";

import { useEffect } from "react";
import { useWalletStore } from "@/store/useWalletStore";
import { useDashboardViewModel } from "@/viewmodels/useDashboardViewModel";
import { useTransactionStore } from "@/store/useTransactionStore";
import { TransactionList } from "@/components/TransactionList";

const Dashboard = () => {
  const { getWalletAmmount, getTransactionHistory } = useDashboardViewModel();
  const { ammount } = useWalletStore();
  const { transactions } = useTransactionStore(); // Utilisation des transactions depuis le store

  useEffect(() => {
    // Appels d'API dans un useEffect pour éviter les mises à jour pendant le rendu
    getWalletAmmount();
    getTransactionHistory();
  }, []);

  // Ajoute un log pour surveiller les transactions
  useEffect(() => {
    console.log("Transactions dans le store:", transactions);
  }, [transactions]);

  return (
    <section className="w-full max-w-7xl mx-auto text-center py-10 bg-gray-900 rounded-3xl mt-16 mb-16 px-8">
      {/* Title and Amount */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Current balance</h1>
        <p className="text-3xl font-bold text-green-400 mt-4">
          {ammount !== null && ammount !== undefined
            ? `${ammount.toFixed(4)} $`
            : "N/A"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Account Management */}
        <div className="md:col-span-1 cursor-pointer bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-700 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">
            Account Management
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Manage your personal information and account settings.
          </p>
        </div>

        {/* Transaction History */}
        <div className="md:col-span-3">
          <TransactionList transactions={transactions} />
        </div>

        {/* Notifications */}
        <div className="md:col-span-2 cursor-pointer bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-700 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Notifications</h3>
          <p className="text-gray-400 leading-relaxed">
            Check the latest notifications and updates related to your account.
          </p>
        </div>

        {/* Ongoing Schedule */}
        <div className="md:col-span-2 cursor-pointer bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-700 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ongoing Schedule
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Track your upcoming deadlines and plan your next financial actions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
