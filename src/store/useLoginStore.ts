import { create } from 'zustand';

interface LoginState {
  email: string;
  password: string;
  loading: boolean;
  error: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  email: "",
  password: "",
  loading: false,
  error: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
