import { create } from 'zustand';

interface LoginState {
  isLogged: boolean;
  email: string;
  password: string;
  loading: boolean;
  error: string;
  setIsLogged: (isLogged: boolean) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  isLogged: false,
  email: "",
  password: "",
  loading: false,
  error: "",
  setIsLogged: (isLogged) => set({ isLogged }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
