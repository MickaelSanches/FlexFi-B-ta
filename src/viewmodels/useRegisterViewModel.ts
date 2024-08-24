import { useState } from "react";

export const useRegisterViewModel = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [acceptPrivacy, setAcceptPrivacy] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Define the base URL for the API
  const URL_API = "http://localhost:3000";

  // Define the type for API call response (optional, depends on your API response structure)
  interface ApiResponse {
    error?: string;
    message?: string;
  }

  // Helper function to handle API calls
  const handleApiCall = async (url: string, method: string, body: any): Promise<ApiResponse> => {
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
      setError(error.message);
      console.error("API call error:", error);
      throw error;
    }
  };

  // Send confirmation email (backend handles code generation)
  const sendConfirmationEmail = async (email: string): Promise<void> => {
    try {
      await handleApiCall(`${URL_API}/send-verification-email`, "POST", { email });
      console.log("Email envoyé avec succès");
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      throw error; // Lancer l'erreur pour qu'elle soit capturée dans handleSubmitEmail
    }
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!acceptPrivacy) {
      alert("Vous devez accepter la politique de confidentialité pour vous inscrire.");
      return;
    }
    try {
      await sendConfirmationEmail(email);
      setCurrentStep(2); // Passe à l'étape suivante seulement si l'envoi de l'email réussit
    } catch (error) {
      setError("Erreur lors de l'envoi de l'email. Veuillez réessayer."); // Affiche l'erreur sans passer à l'étape suivante
    }
  };

  const handleSubmitCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    console.log("Code de confirmation soumis :", confirmationCode);  // Log du code de confirmation

    try {
      // Ajout d'un log pour vérifier l'objet envoyé à l'API
      console.log("Données envoyées :", { email, confirmationCode });

      await handleApiCall(`${URL_API}/verify-email`, "POST", { email, code: confirmationCode });
      setCurrentStep(3);
    } catch (error) {
      setError("Le code de confirmation est incorrect ou a expiré.");
    }
  };



  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    try {
      await handleApiCall(`${URL_API}/register`, "POST", { email, password });
      setCurrentStep(4); // Redirect to login or show success message
    } catch (error) {
      setError("Erreur lors de la création du compte. Veuillez réessayer.");
    }
  };

  return {
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
    loading,
    error,
    handleSubmitEmail,
    handleSubmitCode,
    handleSubmitPassword,
  };
};
