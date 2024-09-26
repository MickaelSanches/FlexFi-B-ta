import { create } from "zustand";

// Définition des types des données du store
interface Transaction {
  blockTime: number;
  signatures: string[];
  accountKeys: string[];
  preBalances: number[];
  postBalances: number[];
}

interface TransactionStoreState {
  transactions: Transaction[]; // Liste des transactions
  error: string | null; // Erreur possible
  setTransactions: (transactions: Transaction[]) => void; // Setter pour les transactions
  addTransaction: (transaction: Transaction) => void; // Ajouter une transaction
  setError: (error: string | null) => void; // Setter pour l'erreur
  clearTransactions: () => void; // Effacer les transactions
}

// Création du store avec Zustand
export const useTransactionStore = create<TransactionStoreState>((set) => ({
  transactions: [], // Initialement, pas de transactions
  error: null, // Initialement, pas d'erreur
  setTransactions: (transactions) => set({ transactions }), // Met à jour les transactions
  addTransaction: (transaction) =>
    set((state) => ({ transactions: [...state.transactions, transaction] })), // Ajoute une transaction
  setError: (error) => set({ error }), // Met à jour l'erreur
  clearTransactions: () => set({ transactions: [] }), // Réinitialise les transactions
}));
