import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPTfTYJlc--Lgf1LVqWQpdvT_OBWoRciY",
  authDomain: "flex-fi.firebaseapp.com",
  projectId: "flex-fi",
  storageBucket: "flex-fi.appspot.com",
  messagingSenderId: "435542109455",
  appId: "1:435542109455:web:7ccc31223903d1c167e27a",
  measurementId: "G-Q3D6QGTJ27",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Fonction pour créer un utilisateur avec e-mail et mot de passe
export const registerWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await sendEmailVerification(user); // Envoie un e-mail de vérification
    return userCredential;
  } catch (error) {
    throw error;
  }
};

// Fonction pour se connecter avec e-mail et mot de passe
export const loginWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    throw error;
  }
};

// Fonction pour se connecter avec Google
export const signInWithGoogle = async (): Promise<UserCredential> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    return userCredential;
  } catch (error) {
    throw error;
  }
};

// Exporter l'authentification pour d'autres opérations si nécessaire
export { auth };
