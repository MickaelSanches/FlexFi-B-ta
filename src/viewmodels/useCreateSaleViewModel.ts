import { Purchase } from "@/@Types/purchase";
import { bnplRepository } from "@/repositories/bnplRepository";
import { Dispatch, SetStateAction } from "react";

export const useCrateSaleViewModel = (
  setPrice: Dispatch<SetStateAction<string>>,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  setInstallments: Dispatch<SetStateAction<number | null>>,
  setBuyerPublicKey: Dispatch<SetStateAction<string>>,
  setPurchases: Dispatch<SetStateAction<Purchase[]>>
) => {
  const { createSale } = bnplRepository();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPrice("");
    setInstallments(null);
    setBuyerPublicKey("");
  };

  const handleSubmit = async (
    e: React.FormEvent,
    sellerPubKey: string,
    buyerPubKey: string,
    amount: number,
    months: number
  ) => {
    e.preventDefault();
    try {
      const newSale = await createSale(
        sellerPubKey,
        buyerPubKey,
        amount,
        months
      );
      closeModal();
      setPurchases((prevPurchases) => [...prevPurchases, newSale]);
    } catch (error) {
      console.error("error create sale:", error);
    }
  };

  const handleInstallmentClick = (months: number) => {
    setInstallments(months);
  };

  return { openModal, closeModal, handleSubmit, handleInstallmentClick };
};
