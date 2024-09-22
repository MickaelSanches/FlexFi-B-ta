import { useRegisterStore } from "../store/useRegisterStore"; // Import du store Zustand

export const useRegisterViewModel = () => {
  const {
    seedPhrase,
    setSeedPhrase,
    setPublicKey, // Setter pour la clé publique
    publicKey,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    acceptPrivacy,
    setAcceptPrivacy,
    confirmationCode,
    setConfirmationCode,
    currentStep,
    setCurrentStep,
    loading,
    setLoading,
    error,
    setError,
  } = useRegisterStore();

  const URL_API = "http://localhost:3000/auth";

  interface ApiResponse {
    error?: string;
    message?: string;
    seed_phrase?: string;
    public_key?: string; // Clé publique du wallet Solana
  }

  const handleApiCall = async (
    url: string,
    method: string,
    body: unknown
  ): Promise<ApiResponse> => {
    try {
      setLoading(true);
      console.log("Données envoyées à l'API :", body); // Vérifie les données envoyées
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log("Réponse API : ", response); // Vérifie la réponse
      setLoading(false);
      if (!response.ok) {
        const errorData: ApiResponse = await response.json();
        throw new Error(errorData.error || "Une erreur est survenue");
      }
      return await response.json();
    } catch (error: unknown) {
      setLoading(false);
      setError(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
      console.error("Erreur lors de l'appel API :", error);
      throw error;
    }
  };

  const sendConfirmationEmail = async (email: string): Promise<void> => {
    try {
      await handleApiCall(`${URL_API}/send-verification-email`, "POST", {
        email,
      });
      console.log("Email envoyé avec succès");
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      // Pas besoin de relancer l'erreur ici car elle est déjà gérée dans handleApiCall
    }
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!acceptPrivacy) {
      alert(
        "Vous devez accepter la politique de confidentialité pour vous inscrire."
      );
      return;
    }

    try {
      await sendConfirmationEmail(email);
      setCurrentStep(2); // Passe à l'étape suivante seulement si l'envoi de l'email réussit
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      console.error("Erreur capturée dans handleSubmitEmail:", error);
      setError("Une erreur est survenue.");
    }
  };

  const handleSubmitCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await handleApiCall(`${URL_API}/verify-email`, "POST", {
        email,
        code: confirmationCode,
      });
      setCurrentStep(3);
    } catch (error) {
      console.error("Erreur capturée dans handleSubmitCode:", error);
      setError("The confirmation code is incorrect or has expired.");
    }
  };

  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,128}$/;

    if (password !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be between 8 and 128 characters long, and include at least one digit and one uppercase letter."
      );
      return;
    }

    try {
      const userCreat = await handleApiCall(`${URL_API}/register`, "POST", {
        email,
        password,
      });

      // Récupère la seed phrase et la public key du wallet Solana
      setSeedPhrase(userCreat.seed_phrase as string);
      setPublicKey(userCreat.public_key as string); // set the public key
      setCurrentStep(4); // Redirection vers l'étape finale
    } catch (error: unknown) {
      if (error instanceof Error && error.message) {
        setError(error.message); // Utilise le message du backend
      } else {
        setError("Erreur lors de la création du compte. Veuillez réessayer.");
      }
    }
  };

  return {
    seedPhrase,
    setSeedPhrase,
    email,
    setEmail,
    password,
    publicKey,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    acceptPrivacy,
    setAcceptPrivacy,
    confirmationCode,
    setConfirmationCode,
    currentStep,
    loading,
    error,
    handleSubmitEmail,
    handleSubmitCode,
    handleSubmitPassword,
  };
};
