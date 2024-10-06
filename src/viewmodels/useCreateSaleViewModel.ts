import { Dispatch, SetStateAction } from "react";

export const useCrateSaleViewModel = (
  setPrice: Dispatch<SetStateAction<string>>,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  setInstallments: Dispatch<SetStateAction<number | null>>,
  setBuyerPublicKey: Dispatch<SetStateAction<string>>
) => {
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPrice("");
    setInstallments(null);
    setBuyerPublicKey("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // console.log("Creating sale with:", { price, installments, buyerPublicKey });

    closeModal();
  };

  const handleInstallmentClick = (months: number) => {
    setInstallments(months);
  };

  return { openModal, handleSubmit, handleInstallmentClick };
};
