import { solanaWalletRepository } from "@/repositories/solanaWalletRepository";
import { useTransactionStore } from "@/store/useTransactionStore";
import { useWalletStore } from "@/store/useWalletStore";

export const useDashboardViewModel = () => {
  const { setAmount } = useWalletStore();
  const { setTransactions } = useTransactionStore();
  const { getWalletAmount, getTransactionHistory } = solanaWalletRepository();

  const onInit = async () => {
    setTransactions([]);
    const amount = await getWalletAmount();
    if (amount !== undefined) {
      console.log("on init set amount");
      setAmount(amount);
    }

    const transactions = await getTransactionHistory();
    if (transactions) {
      setTransactions(transactions);
    }
  };

  return { onInit };
};
