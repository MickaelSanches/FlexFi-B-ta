import { Purchase } from "@/@Types/purchase";
import { bnplRepository } from "@/repositories/bnplRepository";
import { useAuthStore } from "@/store/useAuthStore";
import { Dispatch, SetStateAction } from "react";

export const useMyPurchasesViewModel = (
  setPurchases: Dispatch<SetStateAction<Purchase[]>>,
  setFilteredPurchases: Dispatch<SetStateAction<Purchase[]>>
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
              schedule: purchaseDetails.schedule,
            };
          })
        );
        setPurchases(purchasesWithSchedules);
        setFilteredPurchases(purchasesWithSchedules); // Par défaut, tout afficher
      }
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  };

  const filterPurchases = (
    purchases: Purchase[],
    sortOrder:
      | "dateAsc"
      | "dateDesc"
      | "priceAsc"
      | "priceDesc"
      | "paid"
      | "unpaid"
      | "all"
  ) => {
    let filtered = [...purchases];

    // Trier par statut de paiement
    if (sortOrder === "paid") {
      filtered = filtered.filter((purchase) =>
        purchase.schedule.every((s) => s.paid)
      );
    } else if (sortOrder === "unpaid") {
      filtered = filtered.filter((purchase) =>
        purchase.schedule.some((s) => !s.paid)
      );
    }

    // Trier par date
    if (sortOrder === "dateAsc") {
      filtered.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else if (sortOrder === "dateDesc") {
      filtered.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }

    // Trier par prix
    if (sortOrder === "priceAsc") {
      filtered.sort((a, b) => a.amount - b.amount);
    } else if (sortOrder === "priceDesc") {
      filtered.sort((a, b) => b.amount - a.amount);
    }

    return filtered;
  };

  const { email } = useAuthStore();

  const onPaymentButtonClick = async (saleId: number, scheduleId: number) => {
    try {
      // Effectuer le paiement pour une échéance spécifique
      const result = await payInstallment(saleId, email);
      if (result) {
        console.log("Payment successful for installment:", scheduleId);
        // Rafraîchir les données des achats après le paiement
        await onInit();
      }
    } catch (error) {
      console.error("Error during installment payment:", error);
    }
  };

  return { onInit, filterPurchases, onPaymentButtonClick };
};
