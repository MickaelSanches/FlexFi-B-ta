import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export const sessionRepository = () => {
  const router = useRouter();
  const URL_API = "https://flexfiback.onrender.com/auth";

  interface LoginResponse {
    token?: string;
    seed_phrase?: string;
    public_key?: string;
  }

  interface RegisterResponse {
    seed_phrase?: string;
    public_key?: string;
    token?: string;
  }

  // Fonction générique pour les appels API
  const handleApiCall = async (
    url: string,
    method: string,
    body: unknown
  ): Promise<LoginResponse | RegisterResponse> => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return await response.json();
    } catch (error: any) {
      throw error;
    }
  };

  // Connexion
  const login = async (
    email: string,
    password: string,
    setAuthData: (data: {
      email: string;
      publicKey: string;
      seedPhrase: string;
      isLogged: boolean;
      siren: string;
      legalCategory: string;
      mainActivity: string;
      denomination: string;
    }) => void
  ) => {
    try {
      const response = await handleApiCall(`${URL_API}/login`, "POST", {
        email,
        password,
      });

      const token = response.token;

      if (token) {
        // Décoder le token pour extraire les informations
        const decodedToken: any = jwtDecode(token);

        // Passer les données déduites à la fonction passée en paramètre
        setAuthData({
          email: decodedToken.user.email,
          publicKey: decodedToken.user.public_key,
          seedPhrase: decodedToken.user.seed_phrase,
          isLogged: true,
          siren: decodedToken.user.siren,
          legalCategory: decodedToken.user.categorie_juridique,
          mainActivity: decodedToken.user.activite_principale,
          denomination: decodedToken.user.denomination,
        });

        // Redirection après connexion réussie
        router.push("/dashboard");
        return true;
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const loginForSeedPhrase = async (email: string, password: string) => {
    try {
      const response = await handleApiCall(`${URL_API}/login`, "POST", {
        email,
        password,
      });

      if (response) {
        return response;
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Inscription - Étape 1 : Envoi de l'email de confirmation
  const sendConfirmationEmail = async (
    email: string,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    setError: React.Dispatch<React.SetStateAction<string>>
  ): Promise<Response | void> => {
    try {
      const response = await fetch(`${URL_API}/send-verification-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      return response; // Retourne la réponse complète pour la gérer ensuite
    } catch (error: any) {
      console.error("Error sending confirmation email :", error.message);
      setError(error.message || "Error sending confirmation email.");
    }
  };

  const handleSubmitEmail = async (
    email: string,
    acceptPrivacy: boolean,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setIsloading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    // Vérifier si l'utilisateur a accepté la politique de confidentialité
    if (!acceptPrivacy) {
      setError("You must accept the privacy policy to register.");
      setIsloading(false);
      return;
    }

    try {
      // Appel à l'API pour envoyer l'email de confirmation
      const response = await sendConfirmationEmail(
        email,
        setCurrentStep,
        setError
      );

      if (!response || !response.ok) {
        const errorData = await response?.json();
        setIsloading(false);
        // Si l'email est déjà enregistré (erreur 400), afficher l'erreur et stopper le processus
        if (
          response?.status === 400 &&
          errorData?.error ===
            "This email is already registered. Please use another email or log in."
        ) {
          setError(
            "This email is already registered. Please use another email or log in."
          );
          return;
        }

        // Pour toute autre erreur
        setError(errorData?.error || "An unexpected error occurred.");
        return;
      }

      // Si tout se passe bien, passer à l'étape suivante
      setIsloading(false);
      setCurrentStep(2);
    } catch (error: any) {
      // Si une erreur est capturée, ne pas changer d'étape et afficher l'erreur
      setError(error.message || "An unexpected error occurred.");
      console.error("Erreur capturée dans handleSubmitEmail:", error);
    }
  };

  // Inscription - Étape 2 : Vérification du code de confirmation
  const handleSubmitCode = async (
    email: string,
    confirmationCode: string,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    setError: React.Dispatch<React.SetStateAction<string>>, // Ajout de setError pour afficher l'erreur
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const response = await fetch(`${URL_API}/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code: confirmationCode }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setIsLoading(false);
        // Si le code est invalide ou expiré (erreur 400)
        if (
          response.status === 400 &&
          errorData.error === "Invalid or expired verification code"
        ) {
          setError(
            "The verification code is invalid or has expired. Please try again."
          );
          return; // Ne passe pas à l'étape suivante
        }

        // Gestion des autres erreurs
        setError(
          errorData.error || "An unexpected error occurred. Please try again."
        );
        return; // Ne passe pas à l'étape suivante
      }

      // Si tout se passe bien, passer à l'étape suivante
      setIsLoading(false);
      setCurrentStep(3);
    } catch (error: any) {
      // En cas d'erreur inattendue, afficher un message générique
      setError(error.message || "An error occurred while verifying the code.");
      console.error("Erreur capturée dans handleSubmitCode:", error);
    }
  };

  // Inscription - Étape 3 : Enregistrement du mot de passe et finalisation
  const handleSubmitPassword = async (
    email: string,
    password: string,
    confirmPassword: string,
    siren: string,
    isPro: boolean,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    setSeedPhrase: React.Dispatch<React.SetStateAction<string>>,
    setPublicKey: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?])[A-Za-z\d!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]{12,}$/;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 12 characters long and include at least one uppercase letter, one digit, and one special character."
      );
      return;
    }

    try {
      let userCreat;

      if (isPro) {
        // Inscription pour un utilisateur professionnel
        userCreat = await handleApiCall(
          `${URL_API}/register-professional`,
          "POST",
          {
            email,
            password,
            siren,
          }
        );
      } else {
        // Inscription pour un utilisateur standard
        userCreat = await handleApiCall(`${URL_API}/register`, "POST", {
          email,
          password,
        });
      }

      setSeedPhrase(userCreat.seed_phrase as string);
      setPublicKey(userCreat.public_key as string);

      setCurrentStep(5); // Passer à l'étape finale
    } catch (error: unknown) {
      if (error instanceof Error && error.message) {
        setError(error.message);
      } else {
        setError("Error creating account. Please try again.");
      }
    }
  };

  const logout = () => {
    // Redirect the user to the login page
    router.push("/");
  };

  return {
    login, // Action pour la connexion
    handleSubmitEmail, // Action pour l'inscription (étape 1)
    handleSubmitCode, // Action pour l'inscription (étape 2)
    handleSubmitPassword, // Action pour l'inscription (étape 3)
    loginForSeedPhrase,
    logout,
  };
};
