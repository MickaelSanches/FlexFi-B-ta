import React, { useState } from "react";

interface Transaction {
  blockTime: number | null; // Peut être null si la valeur est absente
  meta: {
    preBalances: number[];
    postBalances: number[];
  };
  transaction: {
    message: {
      accountKeys: string[];
    };
    signatures: string[]; // La signature peut être vide ou absente
  };
}

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
      return amountInLamports / lamportsToSOL;
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
    <a href={transactionLink} target="_blank" rel="noopener noreferrer">
      <li
        className={` mb-4 bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md hover:bg-gray-700 transition duration-300 ease-in-out ${
          isSent ? "border-l-4 border-[#00FEFB]" : "border-l-4 border-green-500"
        }`}
      >
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            {/* Section de la date et de l'adresse */}
            <div className="mb-2 sm:mb-0 sm:mr-4 text-sm md:text-base">
              <span className="font-bold text-gray-500">{transactionDate}</span>{" "}
              | <span className="font-bold text-teal-300">Clé :</span>{" "}
              <span
                onClick={() => setShowFullAddress(!showFullAddress)}
                className="cursor-pointer hover:underline"
              >
                {showFullAddress ? fromAddress : shortAddress}
              </span>
            </div>

            {/* Section du montant */}
            <div className="text-right text-sm md:text-base">
              <span className="font-bold text-teal-300">Montant :</span>{" "}
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
    </a>
  );
};
