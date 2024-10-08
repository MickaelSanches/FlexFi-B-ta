import { create } from "zustand";

interface PageState {
  isShopper: boolean;
  setIsShopper: (isLogged: boolean) => void;
}

export const usePageStore = create<PageState>((set) => ({
  isShopper: false,
  setIsShopper: (isShopper) => set({ isShopper }),
}));
