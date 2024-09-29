import Link from "next/link";
import { useRouter } from "next/navigation";
import { sessionRepository } from "@/repositories/sessionRepository";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { logout } = sessionRepository();
  const [userPublicKey, setUserPublicKey] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const publicKey = sessionStorage.getItem("solanaPublicKey");
    if (publicKey) {
      setUserPublicKey(publicKey);
    }
  }, []);

  return (
    <div className="flex flex-col w-64 h-screen bg-gray-900 text-white shadow-lg">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold">User Dashboard</h2>
      </div>
      <nav className="flex flex-col flex-1 p-4 space-y-4">
        <Link href="/profile" className="hover:bg-gray-700 p-2 rounded">
          Personal Info
        </Link>
        <Link href="/profile/wallet" className="hover:bg-gray-700 p-2 rounded">
          Wallet Info
        </Link>
        <Link
          href="/profile/settings"
          className="hover:bg-gray-700 p-2 rounded"
        >
          Settings
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
