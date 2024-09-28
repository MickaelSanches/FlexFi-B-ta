import { sessionRepository } from "@/repositories/sessionRepository";

export const useLoginViewModel = () => {
  const { login } = sessionRepository();

  const handleSubmit = (email: string, password: string) => {
    login(email, password); // Appelle la fonction login avec email et password
  };

  return { handleSubmit };
};
