import { useState } from "react";

export const useRegisterViewModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  // Simulate an API call to send a confirmation code via email
  const sendConfirmationEmail = async (email: string, code: string) => {
    try {
      const response = await fetch("/api/send-confirmation-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      if (response.ok) {
        console.log("Email envoyé avec succès");
      } else {
        console.error("Échec de l'envoi de l'email");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
    }
  };

  const registerUser = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Utilisateur enregistré avec succès");
        alert("Inscription réussie !");
      } else {
        console.error("Échec de l'inscription");
        alert("Échec de l'inscription");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Erreur lors de l'inscription");
    }
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptPrivacy) {
      alert("Vous devez accepter la politique de confidentialité pour vous inscrire.");
      return;
    }
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setSentCode(code);
    console.log("Code de confirmation généré :", code);

    // Envoyer l'email avec le code de confirmation
    await sendConfirmationEmail(email, code);
    setCurrentStep(2);
  };

  const handleSubmitCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmationCode === sentCode) {
      setCurrentStep(3);
    } else {
      alert("Code incorrect. Veuillez réessayer.");
    }
  };

  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    await registerUser(email, password);
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
    handleSubmitEmail,
    handleSubmitCode,
    handleSubmitPassword,
  };
};
