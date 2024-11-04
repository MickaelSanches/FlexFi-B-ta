import { create } from "zustand";

interface LanguagueState {
  isEnglish: boolean;
  setIsEnglish: (isEnglish: boolean) => void;
}

export const useLanguageStore = create<LanguagueState>((set) => ({
  isEnglish: true,
  setIsEnglish: (isEnglish) => set({ isEnglish }),
}));
