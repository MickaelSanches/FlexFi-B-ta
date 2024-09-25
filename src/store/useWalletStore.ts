import { create } from "zustand";

interface walletState {
  ammount: number;
  setAmmount: (ammount: number) => void;
}

export const useLoginStore = create<walletState>((set) => ({
  ammount: 0,
  setAmmount: (ammount) => set({ ammount }),
}));
