import axios from "axios";

export const bnplRepository = () => {
  const URL_API = "http://localhost:3000";
  const SolanaPublicKey = sessionStorage.getItem("solanaPublicKey");

  const getPurchases = async () => {
    try {
      const response = await axios.get(
        `${URL_API}/bnpl/user/${SolanaPublicKey}/sales`
      );
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching purchases:", error);
      return null;
    }
  };

  return {
    getPurchases,
  };
};
