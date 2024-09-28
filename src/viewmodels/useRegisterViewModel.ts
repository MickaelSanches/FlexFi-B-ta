import { sessionRepository } from "@/repositories/sessionRepository";

export const useRegisterViewModel = () => {
  const { handleSubmitEmail, handleSubmitCode, handleSubmitPassword } =
    sessionRepository();

  const submitEmail = (
    e: React.FormEvent,
    email: string,
    acceptPrivacy: boolean,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  ) => {
    e.preventDefault();
    setError("");
    handleSubmitEmail(email, acceptPrivacy, setCurrentStep, setError);
  };

  const submitCode = (
    e: React.FormEvent,
    email: string,
    confirmationCode: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  ) => {
    e.preventDefault();
    setError("");

    handleSubmitCode(email, confirmationCode, setCurrentStep, setError);
  };

  const submitPassword = (
    e: React.FormEvent,
    email: string,
    password: string,
    confirmPassword: string,
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
      setCurrentStep,
      setSeedPhrase,
      setPublicKey,
      setError
    );
  };

  return {
    submitEmail,
    submitCode,
    submitPassword,
  };
};
