import React, { useState } from "react";

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

interface TransactionItemProps {
  transaction: Transaction;
  userAddress: string; // User's wallet address
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  userAddress, // Passing the user's address here
}) => {
  const [showFullAddress, setShowFullAddress] = useState(false);

  // Function to calculate the transaction amount in SOL
  const calculateTransactionAmount = (
    preBalances: number[],
    postBalances: number[]
  ): number | null => {
    if (preBalances.length > 0 && postBalances.length > 0) {
      const amountInLamports = Math.abs(preBalances[0] - postBalances[0]);
      const lamportsToSOL = 1_000_000_000;
      return amountInLamports / lamportsToSOL;
    }
    return null;
  };

  const amount = calculateTransactionAmount(
    transaction.meta.preBalances || [],
    transaction.meta.postBalances || []
  );

  const fromAddress =
    transaction.transaction.message?.accountKeys?.[0] || "Unknown Address"; // First element of accountKeys is often the sender
  const shortAddress =
    fromAddress.substring(0, 6) +
    "..." +
    fromAddress.substring(fromAddress.length - 4);

  // Format the date in English (MM/DD/YYYY HH:mm:ss)
  const transactionDate = new Date(transaction.blockTime * 1000).toLocaleString(
    "en-US", // Specify the English format
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Use 24-hour format
    }
  );

  // Check if the transaction was sent or received
  const isSent = fromAddress === userAddress; // Compare the sender's address with the user's address

  return (
    <li
      className={`bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md hover:bg-gray-700 transition duration-300 ease-in-out ${
        isSent ? "border-l-4 border-red-500" : "border-l-4 border-green-500"
      }`}
    >
      <div>
        {/* Flex container with responsive adjustments */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          {/* Date and address section */}
          <div className="mb-2 sm:mb-0 sm:mr-4 text-sm md:text-base">
            <span className="font-bold text-gray-500">{transactionDate}</span> |{" "}
            <span className="font-bold text-teal-300">Key:</span>{" "}
            <span
              onClick={() => setShowFullAddress(!showFullAddress)}
              className="cursor-pointer hover:underline"
            >
              {showFullAddress ? fromAddress : shortAddress}
            </span>
          </div>

          {/* Amount section */}
          <div className="text-right text-sm md:text-base">
            <span className="font-bold text-teal-300">Amount:</span>{" "}
            {amount !== null && amount !== undefined
              ? `${amount.toFixed(4)} SOL`
              : "N/A"}{" "}
            {isSent ? (
              <span className="text-red-400">(Sent)</span>
            ) : (
              <span className="text-green-400">(Received)</span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
