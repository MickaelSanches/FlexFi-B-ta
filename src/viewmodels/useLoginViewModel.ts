import { sessionRepository } from "@/repositories/sessionRepository";
import { useAuthStore } from "@/store/useAuthStore";

export const useLoginViewModel = () => {
  const { login } = sessionRepository();
  const { setEmail, setPublicKey, setSeedPhrase, setIsLogged } = useAuthStore();

  const handleSubmit = async (email: string, password: string) => {
    try {
      await login(email, password, (authData) => {
        setEmail(authData.email);
        setPublicKey(authData.publicKey);
        setSeedPhrase(authData.seedPhrase);
        setIsLogged(authData.isLogged);
      });

      // Vérifie ici que tu es bien redirigé après la connexion
      console.log("Redirection vers le dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return { handleSubmit };
};
