import { bnplRepository } from "@/repositories/bnplRepository";
import { sessionRepository } from "@/repositories/sessionRepository";
import { useAuthStore } from "@/store/useAuthStore";
import { useDemoStore } from "@/store/useDemoStore";

export const useDemoViewModel = () => {
  const { login } = sessionRepository();
  const {
    setEmail,
    setPublicKey,
    setSeedPhrase,
    setIsLogged,
    setSiren,
    setLegalCategory,
    setMainActivity,
    setDenomination,
  } = useAuthStore();

  const { createSale, payInstallment } = bnplRepository();
  const { instalment, amount } = useDemoStore();

  console.log(amount);

  const handleSubmit = async (
    mail: string,
    password: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      console.log("Initial state before login:", {
        email: useAuthStore.getState().email, // Accès direct au store
        publicKey: useAuthStore.getState().publicKey, // Accès direct au store
      });

      const log = await login(mail, password, (authData) => {
        setEmail(authData.email);
        setPublicKey(authData.publicKey);
        setSeedPhrase(authData.seedPhrase);
        setIsLogged(authData.isLogged);
        setSiren(authData.siren);
        setLegalCategory(authData.legalCategory);
        setMainActivity(authData.mainActivity);
        setDenomination(authData.denomination);
      });

      if (log) {
        const { email, publicKey } = useAuthStore.getState(); // Récupérer l'état mis à jour
        console.log("State after login:", { email, publicKey });

        const newSale = await createSale(
          "DVPkw98MCX9yCBQh88wbJ8jd3LjVabo68o7g4sFYaW3S",
          publicKey,
          0.5,
          instalment
        );

        console.log(`__________publicKey : ${publicKey}`);

        if (newSale) {
          console.log("State before payment:", { email, publicKey });
          await payInstallment(newSale.data.sale.id, email);
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Login failed:", error);
    }
    setIsLoading(false);
  };

  return { handleSubmit };
};
