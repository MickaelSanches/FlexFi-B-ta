import { create } from "zustand";

interface walletState {
  ammount: number | undefined;
  error: string;
  setError: (error: string) => void;
  setAmount: (ammount: number) => void;
}

export const useWalletStore = create<walletState>((set) => ({
  ammount: undefined,
  error: "",
  setError: (error) => set({ error }),
  setAmount: (ammount) => set({ ammount }),
}));
