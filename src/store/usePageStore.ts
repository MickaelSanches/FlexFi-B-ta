import { create } from "zustand";

interface PageState {
  isShopper: boolean;
  setIsShopper: (isShopper: boolean) => void;
}

export const usePageStore = create<PageState>((set) => ({
  isShopper: false,
  setIsShopper: (isShopper) => set({ isShopper }),
}));
