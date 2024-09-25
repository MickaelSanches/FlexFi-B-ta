import { create } from "zustand";

interface walletState {
  ammount: number | undefined;
  error: string;
  setError: (error: string) => void;
  setAmmount: (ammount: number) => void;
}

export const useWalletStore = create<walletState>((set) => ({
  ammount: undefined,
  error: "",
  setError: (error) => set({ error }),
  setAmmount: (ammount) => set({ ammount }),
}));
