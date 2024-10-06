import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";

export const bnplRepository = () => {
  const URL_API = "http://localhost:3000";
  const { publicKey } = useAuthStore();

  const createSale = async (
    sellerPubKey: string,
    buyerPubKey: string,
    amount: number,
    months: number
  ) => {
    try {
      const sale = await axios.post(`${URL_API}/bnpl/sale`, {
        sellerPubKey,
        buyerPubKey,
        amount,
        months,
      });

      return sale;
    } catch (error) {
      console.error("error create sale:", error);
    }
  };

  const getPurchases = async () => {
    try {
      const purchases = await axios.get(
        `${URL_API}/bnpl/user/${publicKey}/sales`
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

  const getPrivatekeyByEmail = async (email: string) => {
    try {
      const response = await axios.get(
        `${URL_API}/bnpl/user/${email}/privateKey`
      );

      if (response.status === 200) {
        const privateKey = response.data.privateKey; // Assuming the private key is inside 'data.privateKey'
        return privateKey; // Return the private key
      } else {
        console.error(`Error: Received status ${response.status}`);
        return null; // Return null if the status is not 200
      }
    } catch (error) {
      console.error("Error fetching private key:", error);
      return null; // Return null in case of an error
    }
  };

  const payInstallment = async (saleId: number, email: string) => {
    try {
      const buyerPrivateKey = await getPrivatekeyByEmail(email);

      console.log(`salID_________ ${saleId}`);
      console.log(`buyerPrivateKey_________ ${buyerPrivateKey}`);

      const payment = await axios.post(`${URL_API}/bnpl/payment`, {
        buyerPrivateKey,
        saleId,
      });

      if (payment.status === 200) {
        console.log("Payment successful:", payment.data);
        return payment.data; // Return the data if payment is successful
      } else {
        console.error("Payment error:", payment.status);
        return null; // Return null if the response status is not 200
      }
    } catch (error) {
      console.error("Error making payment request:", error);
      return null; // Return null in case of an error
    }
  };

  return {
    createSale,
    getPurchases,
    downloadPurchaseInfoInPDF,
    getPurchasDetails,
    payInstallment,
    getPrivatekeyByEmail,
  };
};
