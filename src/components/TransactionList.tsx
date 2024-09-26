import React from "react";

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
  };
}

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
}) => {
  // Function to calculate the transaction amount
  const calculateTransactionAmount = (
    preBalances: number[],
    postBalances: number[]
  ): number | null => {
    if (preBalances.length > 0 && postBalances.length > 0) {
      const amountInLamports = preBalances[0] - postBalances[0];
      const lamportsToSOL = 1_000_000_000;
      return amountInLamports / lamportsToSOL;
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-tr from-gray-800 via-gray-900 to-black border border-gray-700 shadow-xl rounded-3xl p-8">
      <h3 className="text-3xl font-extrabold text-white mb-6">
        Transaction History
      </h3>
      <ul className="text-left text-gray-300 space-y-4">
        {transactions.length > 0 ? (
          transactions.map((tx, index) => {
            const amount = calculateTransactionAmount(
              tx.meta.preBalances || [],
              tx.meta.postBalances || []
            );
            const fromAddress =
              tx.transaction.message?.accountKeys?.[0] || "Unknown Address";
            const transactionDate = new Date(
              tx.blockTime * 1000
            ).toLocaleString();

            return (
              <li
                key={index}
                className="bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-teal-300">From:</span>{" "}
                    {fromAddress} |{" "}
                    <span className="font-bold text-teal-300">Amount:</span>{" "}
                    {amount !== null && amount !== undefined
                      ? `${amount.toFixed(4)} SOL`
                      : "N/A"}
                  </div>
                  <div className="text-gray-500 text-sm">{transactionDate}</div>
                </div>
              </li>
            );
          })
        ) : (
          <li>No transactions available.</li>
        )}
      </ul>
    </div>
  );
};
