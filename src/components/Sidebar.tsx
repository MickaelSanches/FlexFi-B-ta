import Link from "next/link";
import { sessionRepository } from "@/repositories/sessionRepository";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Importer usePathname

const Sidebar = () => {
  const { logout } = sessionRepository();
  const [userPublicKey, setUserPublicKey] = useState<string | null>(null);
  const pathname = usePathname(); // Utiliser usePathname pour obtenir le chemin actuel

  useEffect(() => {
    const publicKey = sessionStorage.getItem("solanaPublicKey");
    if (publicKey) {
      setUserPublicKey(publicKey);
    }
  }, []);

  // Fonction pour vérifier si la route est active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col w-64 h-screen bg-gray-900 text-white shadow-lg">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold">User Dashboard</h2>
      </div>
      <nav className="flex flex-col flex-1 p-4 space-y-4">
        <Link
          href="/profile"
          className={`p-2 rounded ${
            isActive("/profile") ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          Personal Info
        </Link>
        <Link
          href="/dashboard"
          className={`p-2 rounded ${
            isActive("/dashboard") ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          Wallet
        </Link>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 p-2 rounded text-white mt-auto"
        >
          Logout
        </button>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <p>Public Key:</p>
        <p className="break-all text-sm">{userPublicKey || "Loading..."}</p>
      </div>
    </div>
  );
};

export default Sidebar;
