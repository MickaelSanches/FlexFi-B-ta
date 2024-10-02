import axios from "axios";

export const bnplRepository = () => {
  const URL_API = "http://localhost:3000";
  const SolanaPublicKey = sessionStorage.getItem("solanaPublicKey");

  const getPurchases = async () => {
    try {
      const purchases = await axios.get(
        `${URL_API}/bnpl/user/${SolanaPublicKey}/sales`
      );
      if (purchases) {
        return purchases.data;
      }
    } catch (error) {
      console.error("Error fetching purchases:", error);
      return null;
    }
  };

  const getPurchasDetails = async (saleId: number) => {
    try {
      const response = await axios.get(`${URL_API}/bnpl/sale/${saleId}`);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching purchase details:", error);
      return null;
    }
  };

  const downloadPurchaseInfoInPDF = async (saleId: number, type: string) => {
    try {
      const response = await axios.get(
        `${URL_API}/bnpl/sale/${saleId}/schedule/${type}/pdf`,
        { responseType: "blob" } // Assure que les données sont traitées comme un blob (binaire)
      );
      return response;
    } catch (error) {
      console.error("Error downloading purchase PDF:", error);
      return null;
    }
  };

  return {
    getPurchases,
    downloadPurchaseInfoInPDF,
    getPurchasDetails,
  };
};
