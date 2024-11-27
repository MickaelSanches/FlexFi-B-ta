import React from "react";
import { TransactionItem } from "./TransactionItem";
import { useAuthStore } from "@/store/useAuthStore";
import { Transaction } from "@/@Types/transaction";

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
}) => {
  const { publicKey } = useAuthStore();
  return (
    <div className="bg-[#B2D1E0] border shadow-2xl rounded-3xl p-8">
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="border-black border-b-2 text-gray-700 uppercase text-sm font-display">
              <th className="p-4 text-center w-16">Arrow</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Key</th>
              <th className="p-4 text-right">Amount</th>
              <th className="p-4 text-right">Info</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((tx, index) => (
                <TransactionItem
                  key={index}
                  transaction={tx}
                  userAddress={publicKey}
                />
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No transactions available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
