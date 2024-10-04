import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  email: string;
  seedPhrase: string;
  publicKey: string;
  isLogged: boolean;
  siren: string;
  legalCategory: string;
  mainActivity: string;
  denomination: string;

  setEmail: (email: string) => void;
  setSeedPhrase: (seedPhrase: string) => void;
  setPublicKey: (publicKey: string) => void;
  setIsLogged: (isLogged: boolean) => void;
  setSiren: (siren: string) => void;
  setLegalCategory: (legalCategory: string) => void;
  setMainActivity: (mainActivity: string) => void;
  setDenomination: (denomination: string) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: "",
      seedPhrase: "",
      publicKey: "",
      isLogged: false,
      siren: "",
      legalCategory: "",
      mainActivity: "",
      denomination: ",",

      setEmail: (email) => set({ email }),
      setSeedPhrase: (seedPhrase) => set({ seedPhrase }),
      setPublicKey: (publicKey) => set({ publicKey }),
      setIsLogged: (isLogged) => set({ isLogged }),
      setSiren: (siren) => set({ siren }),
      setLegalCategory: (legalCategory) => set({ legalCategory }),
      setMainActivity: (mainActivity) => set({ mainActivity }),
      setDenomination: (denomination) => set({ denomination }),

      reset: () =>
        set({
          email: "",
          seedPhrase: "",
          publicKey: "",
          isLogged: false,
          siren: "",
          legalCategory: "",
          mainActivity: "",
          denomination: "",
        }),
    }),
    {
      name: "auth-storage", // clé utilisée dans le localStorage
      storage:
        typeof window !== "undefined"
          ? createJSONStorage(() => localStorage)
          : undefined,
    }
  )
);
