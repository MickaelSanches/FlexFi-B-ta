import { sessionRepository } from "@/repositories/sessionRepository";

export const useRegisterViewModel = () => {
  const { handleSubmitEmail, handleSubmitCode, handleSubmitPassword } =
    sessionRepository();

  const submitEmail = (
    e: React.FormEvent,
    email: string,
    acceptPrivacy: boolean,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    handleSubmitEmail(
      email,
      acceptPrivacy,
      setCurrentStep,
      setError,
      setIsLoading
    );
  };

  const submitCode = (
    e: React.FormEvent,
    email: string,
    confirmationCode: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    e.preventDefault();
    setError("");
    setIsLoading(true)

    handleSubmitCode(email, confirmationCode, setCurrentStep, setError, setIsLoading);
  };

  const submitPassword = (
    e: React.FormEvent,
    email: string,
    password: string,
    confirmPassword: string,
    siren: string,
    isPro: boolean,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    setSeedPhrase: React.Dispatch<React.SetStateAction<string>>,
    setPublicKey: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    setError("");

    handleSubmitPassword(
      email,
      password,
      confirmPassword,
      siren,
      isPro,
      setCurrentStep,
      setSeedPhrase,
      setPublicKey,
      setError
    );
  };

  const submitProfessionalInfo = (
    e: React.FormEvent,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  ) => {
    e.preventDefault();
    setCurrentStep(4);
  };

  return {
    submitEmail,
    submitCode,
    submitPassword,
    submitProfessionalInfo,
  };
};
