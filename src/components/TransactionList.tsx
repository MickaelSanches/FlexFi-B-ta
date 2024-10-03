import React from "react";
import { TransactionItem } from "./TransactionItem";
import { useAuthStore } from "@/store/useAuthStore";

interface Transaction {
  blockTime: number;
  meta: {
    preBalances: number[];
    postBalances: number[];
  };
  transaction: {
    message: {
      accountKeys: string[];
    };
    signatures: string[];
  };
}

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
}) => {
  const { publicKey } = useAuthStore();
  return (
    <div className="bg-gradient-to-tr from-gray-800 via-gray-900 to-black border border-gray-700 shadow-xl rounded-3xl p-8">
      <h3 className="text-3xl font-extrabold text-white mb-6">
        Transaction History
      </h3>
      <ul className="text-left text-gray-300 space-y-4">
        {transactions.length > 0 ? (
          transactions.map((tx, index) => (
            <TransactionItem
              key={index}
              transaction={tx}
              userAddress={publicKey}
            />
          ))
        ) : (
          <li>No transactions available.</li>
        )}
      </ul>
    </div>
  );
};
