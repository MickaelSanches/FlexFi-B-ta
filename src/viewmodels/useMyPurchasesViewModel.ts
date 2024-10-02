import { bnplRepository } from "@/repositories/bnplRepository";
import { Dispatch, SetStateAction } from "react";

interface Purchase {
  seller_pubkey: string;
  amount: number;
  months: number;
  monthly_payment: string;
}

export const useMyPurchasesViewModel = (
  setPurchases: Dispatch<SetStateAction<Purchase[]>>
) => {
  const { getPurchases } = bnplRepository();

  const onInit = async () => {
    const purchases = await getPurchases();
    if (purchases) {
      setPurchases(purchases);
    }
  };

  return { onInit };
};
