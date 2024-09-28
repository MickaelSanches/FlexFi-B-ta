import { sessionRepository } from "@/repositories/sessionRepository";

export const useRegisterViewModel = () => {
  const { handleSubmitEmail, handleSubmitCode, handleSubmitPassword } =
    sessionRepository();

  const submitEmail = async (
    e: React.FormEvent,
    email: string,
    acceptPrivacy: boolean,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  ) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await handleSubmitEmail(email, acceptPrivacy, setCurrentStep, setError);
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'envoi de l'email.");
    } finally {
      setLoading(false);
    }
  };

  const submitCode = async (
    e: React.FormEvent,
    email: string,
    confirmationCode: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  ) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await handleSubmitCode(email, confirmationCode, setCurrentStep, setError);
    } catch (err: any) {
      setError(err.message || "Erreur lors de la vérification du code.");
    } finally {
      setLoading(false);
    }
  };

  const submitPassword = async (
    e: React.FormEvent,
    email: string,
    password: string,
    confirmPassword: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    setSeedPhrase: React.Dispatch<React.SetStateAction<string>>,
    setPublicKey: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      await handleSubmitPassword(
        email,
        password,
        confirmPassword,
        setCurrentStep,
        setSeedPhrase,
        setPublicKey,
        setError
      );
    } catch (err: any) {
      setError(err.message || "Erreur lors de la création du mot de passe.");
    } finally {
      setLoading(false);
    }
  };

  return {
    submitEmail,
    submitCode,
    submitPassword,
  };
};
