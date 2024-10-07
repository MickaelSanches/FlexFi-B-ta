import Link from "next/link";
import { sessionRepository } from "@/repositories/sessionRepository";
import { usePathname } from "next/navigation"; // Importer usePathname
import { useAuthStore } from "@/store/useAuthStore";

const Sidebar = () => {
  const { logout } = sessionRepository();
  const pathname = usePathname(); // Utiliser usePathname pour obtenir le chemin actuel
  const { reset, setIsLogged } = useAuthStore();
  // Fonction pour vérifier si la route est active
  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    logout();
    reset();
    setIsLogged(false); // Mettre à jour l'état local immédiatement
  };

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
          href="/purchases"
          className={`p-2 rounded ${
            isActive("/purchases") ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          My purchases
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
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 p-2 rounded text-white mt-auto"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
