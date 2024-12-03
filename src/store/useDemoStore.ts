import { create } from "zustand";

interface DemoState {
  instalment: number;
  amount: number;
  paiementStep: number;
  setInstalment: (isLogged: number) => void;
  setAmount: (email: number) => void;
  setPaiementStep: (paiementStep: number) => void;
}

export const useDemoStore = create<DemoState>((set) => ({
  instalment: 3,
  amount: 0,
  paiementStep: 1,
  setInstalment: (instalment) => set({ instalment }),
  setAmount: (amount) => set({ amount }),
  setPaiementStep: (paiementStep) => set({ paiementStep }),
}));
