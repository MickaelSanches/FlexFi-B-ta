"use client";

import { useEffect } from "react";
import { useWalletStore } from "@/store/useWalletStore";
import { useDashboardViewModel } from "@/viewmodels/useDashboardViewModel";
import { useTransactionStore } from "@/store/useTransactionStore";
import { TransactionList } from "@/components/TransactionList";
import { useAuthStore } from "@/store/useAuthStore";

const Dashboard = () => {
  const { onInit } = useDashboardViewModel();
  const { ammount } = useWalletStore();
  const { transactions } = useTransactionStore();
  const { isLogged } = useAuthStore();

  useEffect(() => {
    console.log("Initialisation du Dashboard, islogged = " + isLogged);
    onInit();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto text-center py-12 bg-gradient-to-br from-black via-gray-900 to-gray-950 rounded-3xl mt-16 mb-16 px-8 shadow-2xl">
      {/* Title and Amount */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-6">
          Current Balance
        </h1>
        <p className="text-3xl md:text-4xl font-extrabold text-green-400">
          {ammount !== null && ammount !== undefined
            ? `${ammount.toFixed(4)} SOL`
            : "N/A"}
        </p>
      </div>

      {/* Transaction History */}
      <div className="w-full">
        <TransactionList transactions={transactions} />
      </div>
    </section>
  );
};

export default Dashboard;
