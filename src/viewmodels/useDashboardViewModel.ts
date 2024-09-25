import { useRegisterStore } from "@/store/useRegisterStore";
import { useWalletStore } from "@/store/useWalletStore";

export const useDashboardViewModel = () => {
  const { ammount, setAmmount, error, setError } = useWalletStore();
  const { publicKey } = useRegisterStore();

  const URL_API = "http://localhost:3000/auth";

  interface ApiResponse {
    balance?: number;
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
      const response = await handleApiCall(
        `${URL_API}/get-wallet-balance/${publicKey}`,
        "GET"
      );
      if (response && response.balance) {
        setAmmount(response.balance);
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du montant du portefeuille :",
        error
      );
    }
  };

  return {
    ammount,
    error,
    getWalletAmmount,
  };
};
