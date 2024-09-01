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
  isLogged: typeof window !== 'undefined' ? !!localStorage.getItem('isLogged') : false,
  email: "",
  password: "",
  loading: false,
  error: "",
  setIsLogged: (isLogged) => {
    set({ isLogged });
    if (isLogged) {
      localStorage.setItem('isLogged', 'true');
    } else {
      localStorage.removeItem('isLogged');
    }
  },
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
