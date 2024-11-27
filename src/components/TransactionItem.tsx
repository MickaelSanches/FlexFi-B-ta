import { Transaction } from "@/@Types/transaction";
import React, { useState } from "react";

interface TransactionItemProps {
  transaction: Transaction;
  userAddress: string | null; // Adresse du portefeuille de l'utilisateur
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  userAddress,
}) => {
  const [showFullAddress, setShowFullAddress] = useState(false);

  // Vérification que blockTime existe bien avant de le convertir en date
  const blockTime = transaction.blockTime ? transaction.blockTime * 1000 : null;

  // Fonction pour calculer le montant de la transaction en SOL
  const calculateTransactionAmount = (
    preBalances: number[],
    postBalances: number[]
  ): number | null => {
    if (preBalances.length > 0 && postBalances.length > 0) {
      const amountInLamports = Math.abs(preBalances[0] - postBalances[0]);
      const lamportsToSOL = 1_000_000_000;
      const rawAmount = amountInLamports / lamportsToSOL;

      // Multiplier par 10^5, enlever les parties après 5 décimales, et diviser de nouveau
      return Math.floor(rawAmount * 100000) / 100000;
    }
    return null;
  };

  const amount = calculateTransactionAmount(
    transaction.meta.preBalances || [],
    transaction.meta.postBalances || []
  );

  const fromAddress =
    transaction.transaction.message?.accountKeys?.[0] || "Adresse inconnue";
  const shortAddress =
    fromAddress.substring(0, 6) +
    "..." +
    fromAddress.substring(fromAddress.length - 4);

  // Formatage de la date si blockTime est défini
  const transactionDate = blockTime
    ? new Date(blockTime).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    : "Date inconnue";

  // Vérification que signature existe avant d'y accéder
  const transactionLink =
    transaction.transaction.signatures &&
    transaction.transaction.signatures.length > 0
      ? `https://explorer.solana.com/tx/${transaction.transaction.signatures[0]}?cluster=devnet`
      : "https://explorer.solana.com"; // Lien par défaut si la signature est absente

  const isSent = fromAddress === userAddress;

  return (
    <tr className="text-gray-800 border-b">
      {/* Flèche */}
      <td className="p-4 text-center">
        <span
          className={`inline-block w-6 h-6 text-white rounded-full ${
            isSent ? "bg-blue-500" : "bg-green-500"
          }`}
        >
          {isSent ? "↑" : "↓"}
        </span>
      </td>

      {/* Date */}
      <td className="p-4 whitespace-nowrap text-sm">{transactionDate}</td>

      {/* Key */}
      <td
        className="p-4 text-sm font-mono cursor-pointer"
        onClick={() => setShowFullAddress(!showFullAddress)}
      >
        {showFullAddress ? fromAddress : shortAddress}
      </td>

      {/* Amount */}
      <td
        className={`p-4 text-right font-bold ${
          isSent ? "text-red-500" : "text-green-500"
        }`}
      >
        {amount !== null
          ? `${isSent ? "-" : "+"}${amount.toFixed(4)} SOL`
          : "N/A"}
      </td>
      <td className={`p-4 text-right font-bold underline`}>
        <a target="_blank" rel="noopener noreferrer" href={transactionLink}>
          more
        </a>
      </td>
    </tr>
  );
};
