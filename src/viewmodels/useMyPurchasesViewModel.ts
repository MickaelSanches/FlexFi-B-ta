import { Purchase } from "@/@Types/purchase";
import { bnplRepository } from "@/repositories/bnplRepository";
import { useAuthStore } from "@/store/useAuthStore";
import { Dispatch, SetStateAction } from "react";

export const useMyPurchasesViewModel = (
  setPurchases: Dispatch<SetStateAction<Purchase[]>>
) => {
  const { getPurchases, getPurchasDetails, payInstallment } = bnplRepository();

  const onInit = async () => {
    try {
      // Récupère toutes les ventes
      const purchases = await getPurchases();
      if (purchases) {
        // Pour chaque vente, récupère les détails (y compris les échéanciers)
        const purchasesWithSchedules = await Promise.all(
          purchases.map(async (purchase: Purchase) => {
            const purchaseDetails = await getPurchasDetails(purchase.id);
            // Ajoute l'échéancier aux informations de la vente
            return {
              ...purchase,
              schedule: purchaseDetails.schedule, // Ajoute l'échéancier aux achats
            };
          })
        );
        // Mets à jour l'état avec les ventes contenant les échéanciers
        setPurchases(purchasesWithSchedules);
      }
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  };

  const { email } = useAuthStore();

  const onPaymentButtonClick = async (saleId: number, scheduleId: number) => {
    try {
      // Perform the payment for a specific installment
      const result = await payInstallment(saleId, email);
      if (result) {
        console.log("Payment successful for installment:", scheduleId);
        // Refresh the purchase data after payment
        await onInit();
      }
    } catch (error) {
      console.error("Error during installment payment:", error);
    }
  };

  return { onInit, onPaymentButtonClick };
};
