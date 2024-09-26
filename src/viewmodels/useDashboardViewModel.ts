import { useLoginStore } from "@/store/useLoginStore";
import { useWalletStore } from "@/store/useWalletStore";
import { useTransactionStore } from "@/store/useTransactionStore";

export const useDashboardViewModel = () => {
  const { setAmmount, setError } = useWalletStore();
  const { publicKey } = useLoginStore();
  const { setTransactions } = useTransactionStore();

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
      setError(error.message || "Une erreur est survenue");
      console.error("Erreur lors de l'appel API :", error);
      throw error;
    }
  };

  const getWalletAmmount = async () => {
    try {
      const response = await handleApiCall(
        `${URL_API}/solana/get-wallet-balance/${publicKey}`,
        "GET"
      );
      console.log("Wallet balance response:", response); // Vérifie la réponse ici
      if (response.balance !== null && response.balance !== undefined) {
        setAmmount(response.balance);
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
        `${URL_API}/solana/transaction-history/${publicKey}`,
        "GET"
      );

      console.log("Transaction history response:", response); // Vérifie la réponse des transactions
      if (response.transactions) {
        setTransactions(response.transactions);
        console.log(
          "Transactions mises à jour dans le store:",
          response.transactions
        );
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
    getWalletAmmount,
    getTransactionHistory,
  };
};
