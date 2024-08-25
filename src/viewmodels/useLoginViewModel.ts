import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useLoginStore } from '../store/useLoginStore';

export const useLoginViewModel = () => {
  const { email, setEmail, password, setPassword, loading, setLoading, error, setError } = useLoginStore();

  const router = useRouter()


  const URL_API = "http://localhost:3000";

  interface ApiResponse {
    error?: string;
    message?: string;
  }

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
      setError(error.message || "Une erreur est survenue");
      console.error("API call error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await handleApiCall(`${URL_API}/login`, "post", { email, password });
      router.push("/")
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
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