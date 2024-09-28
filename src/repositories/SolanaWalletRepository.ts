export const solanaWalletRepository = () => {
  // const publicKey = "FpgzSe5gk94hpEPhU5xsiovEL2rDJTjjfzKHYbZntr2Y";

  const SolanaPublicKey = sessionStorage.getItem("solanaPublicKey");

  const URL_API = "http://localhost:3000";

  interface ApiResponse {
    balance?: number | null;
    error?: string;
    message?: string;
    transactions?: any[]; // Type des transactions
  }

  const handleApiCall = async (
    url: string,
    method: string,
    body?: unknown
  ): Promise<ApiResponse> => {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        const errorData: ApiResponse = await response.json();
        throw new Error(errorData.error || "Une erreur est survenue");
      }

      return await response.json();
    } catch (error: any) {
      console.error("Erreur lors de l'appel API :", error);
      throw error;
    }
  };

  const getWalletAmount = async () => {
    console.log("getWalletAmount triggered");
    try {
      const response = await handleApiCall(
        `${URL_API}/solana/get-wallet-balance/${SolanaPublicKey}`,
        "GET"
      );
      console.log("Wallet balance response:", response); // Vérifie la réponse ici // Vérifie la réponse ici
      if (response.balance !== null && response.balance !== undefined) {
        const balance = response.balance;
        return balance;
      } else {
        console.log("Balance non trouvée dans la réponse");
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du montant du portefeuille :",
        error
      );
    }
  };

  const getTransactionHistory = async () => {
    try {
      const response = await handleApiCall(
        `${URL_API}/solana/transaction-history/${SolanaPublicKey}`,
        "GET"
      );

      console.log("Transaction history response:", response); // Vérifie la réponse des transactions
      if (response.transactions) {
        const transactions = response.transactions;
        return transactions;
      } else {
        console.log("Aucune transaction trouvée");
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de l'historique des transactions :",
        error
      );
    }
  };

  return {
    getWalletAmount,
    getTransactionHistory,
  };
};
