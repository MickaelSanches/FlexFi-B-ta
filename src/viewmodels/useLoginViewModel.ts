import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useLoginStore } from "../store/useLoginStore";

export const useLoginViewModel = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    setLoading,
    error,
    setError,
    setIsLogged,
    setPublicKey,
  } = useLoginStore();

  const router = useRouter();
  const URL_API = "http://localhost:3000/auth";

  interface ApiResponse {
    token?: string;
    error?: string;
    message?: string;
  }

  const handleApiCall = async (
    url: string,
    method: string,
    body: unknown
  ): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setLoading(false);

      if (!response.ok) {
        const errorData: ApiResponse = await response.json();
        throw new Error(errorData.error || "Une erreur est survenue");
      }

      return await response.json();
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "Une erreur est survenue");
      console.error("API call error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Effectuer l'appel API pour se connecter
      const response = await handleApiCall(`${URL_API}/login`, "post", {
        email,
        password,
      });

      // Récupérer le token depuis la réponse
      const token = response.token;

      if (token) {
        // Stocker le token dans sessionStorage
        sessionStorage.setItem("token", token);

        // Décoder le token pour extraire les informations
        const decodedToken: any = jwtDecode(token);

        const publicKey = decodedToken.user.public_key;

        // Stocker les informations dans le store
        setIsLogged(true);
        setPublicKey(publicKey);

        // Rediriger l'utilisateur après la connexion réussie
        router.push("/");
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error: any) {
      if (error.message) {
        setError(error.message);
      } else {
        setError("Erreur lors de la connexion. Veuillez réessayer.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleSubmit,
  };
};
