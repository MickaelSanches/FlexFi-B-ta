import { create } from "zustand";

interface AuthState {
  email: string;
  password: string;
  confirmPassword: string;
  acceptPrivacy: boolean;
  confirmationCode: string;
  currentStep: number;
  seedPhrase: string;
  publicKey: string;
  loading: boolean;
  error: string;
  isLogged: boolean;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
  setAcceptPrivacy: (accept: boolean) => void;
  setConfirmationCode: (code: string) => void;
  setCurrentStep: (step: number) => void;
  setSeedPhrase: (seedPhrase: string) => void;
  setPublicKey: (publicKey: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setIsLogged: (isLogged: boolean) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: "",
  password: "",
  confirmPassword: "",
  acceptPrivacy: false,
  confirmationCode: "",
  currentStep: 1,
  seedPhrase: "",
  publicKey: "",
  loading: false,
  error: "",
  isLogged: false,

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setAcceptPrivacy: (acceptPrivacy) => set({ acceptPrivacy }),
  setConfirmationCode: (confirmationCode) => set({ confirmationCode }),
  setCurrentStep: (currentStep) => set({ currentStep }),
  setSeedPhrase: (seedPhrase) => set({ seedPhrase }),
  setPublicKey: (publicKey) => set({ publicKey }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setIsLogged: (isLogged) => set({ isLogged }),

  reset: () =>
    set({
      email: "",
      password: "",
      confirmPassword: "",
      acceptPrivacy: false,
      confirmationCode: "",
      currentStep: 1,
      seedPhrase: "",
      publicKey: "",
      loading: false,
      error: "",
      isLogged: false,
    }),
}));
