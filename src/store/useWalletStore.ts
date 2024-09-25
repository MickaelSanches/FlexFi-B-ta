import { create } from "zustand";

interface walletState {
  ammount: number;
  error: string;
  setError: (error: string) => void;
  setAmmount: (ammount: number) => void;
}

export const useWalletStore = create<walletState>((set) => ({
  ammount: 0,
  error: "",
  setError: (error) => set({ error }),
  setAmmount: (ammount) => set({ ammount }),
}));
