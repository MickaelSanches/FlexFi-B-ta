import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
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
