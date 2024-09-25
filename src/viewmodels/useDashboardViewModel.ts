import { useLoginStore } from "@/store/useLoginStore";
import { useWalletStore } from "@/store/useWalletStore";

export const useDashboardViewModel = () => {
  const { ammount, setAmmount, error, setError } = useWalletStore();
  const { publicKey } = useLoginStore();

  const URL_API = "http://localhost:3000";

  interface ApiResponse {
    balance?: number | null;
    error?: string;
    message?: string;
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
      console.log(publicKey);
      const response = await handleApiCall(
        `${URL_API}/solana/get-wallet-balance/${publicKey}`,
        "GET"
      );

      console.log("reponse.balance = ", response.balance);

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

  return {
    error,
    getWalletAmmount,
  };
};
