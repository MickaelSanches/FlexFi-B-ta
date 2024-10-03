import { create } from "zustand";

interface AuthState {
  email: string;
  seedPhrase: string;
  publicKey: string;
  isLogged: boolean;

  setEmail: (email: string) => void;
  setSeedPhrase: (seedPhrase: string) => void;
  setPublicKey: (publicKey: string) => void;
  setIsLogged: (isLogged: boolean) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: "",
  seedPhrase: "",
  publicKey: "",
  isLogged: false,

  setEmail: (email) => set({ email }),
  setSeedPhrase: (seedPhrase) => set({ seedPhrase }),
  setPublicKey: (publicKey) => set({ publicKey }),
  setIsLogged: (isLogged) => set({ isLogged }),

  reset: () =>
    set({
      email: "",
      seedPhrase: "",
      publicKey: "",
      isLogged: false,
    }),
}));
