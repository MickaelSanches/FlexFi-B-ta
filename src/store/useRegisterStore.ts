import { create } from "zustand";

interface RegisterState {
  seedPhrase: string;
  setSeedPhrase: (seedPhrase: string) => void;
  publicKey: string; // Ajoute la clé publique ici
  setPublicKey: (publicKey: string) => void; // Setter pour la clé publique
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  acceptPrivacy: boolean;
  setAcceptPrivacy: (accept: boolean) => void;
  confirmationCode: string;
  setConfirmationCode: (code: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
  reset: () => void;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  seedPhrase: "",
  setSeedPhrase: (seedPhrase) => set({ seedPhrase }),
  publicKey: "", // Initialise la clé publique à une chaîne vide
  setPublicKey: (publicKey) => set({ publicKey }), // Setter pour la clé publique
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
  confirmPassword: "",
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  acceptPrivacy: false,
  setAcceptPrivacy: (acceptPrivacy) => set({ acceptPrivacy }),
  confirmationCode: "",
  setConfirmationCode: (confirmationCode) => set({ confirmationCode }),
  currentStep: 1,
  setCurrentStep: (currentStep) => set({ currentStep }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: "",
  setError: (error) => set({ error }),
  reset: () =>
    set({
      email: "",
      password: "",
      confirmPassword: "",
      acceptPrivacy: false,
      confirmationCode: "",
      currentStep: 1,
      loading: false,
      error: "",
      publicKey: "", // Réinitialise la clé publique lors du reset
      seedPhrase: "", // Réinitialise la seed phrase lors du reset
    }),
}));
