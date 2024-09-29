"use client";

import DashboardLayout from "@/app/dashboard/layout";
import { useEffect, useState } from "react";

const Profile = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
    const storedPublicKey = sessionStorage.getItem("solanaPublicKey");
    if (storedPublicKey) {
      setPublicKey(storedPublicKey);
    }
    const storedPrivateKey = sessionStorage.getItem("solanaPrivateKey");
    if (storedPrivateKey) {
      setPrivateKey(storedPrivateKey);
    } else {
      console.log("No private key found");
    }
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-extrabold mb-6">Personal Information</h1>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg transition-transform">
        <div className="mb-4">
          <p className="text-sm text-gray-400 uppercase">Email</p>
          <p className="text-xl font-semibold text-white">
            {email || "Not Available"}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-400 uppercase">Public Key</p>
          <p className="text-lg font-mono text-blue-400 break-all">
            {publicKey || "Not Available"}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-400 uppercase">Private Key</p>
          <p className="text-lg font-mono text-red-400 break-all">
            {privateKey || "Not Available"}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
