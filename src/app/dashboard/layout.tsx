"use client";

import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex min-h-screen">
      {/* Utiliser hidden sur petits écrans et block à partir de la taille md */}
      <Sidebar />
      <main className="flex-1 bg-black p-4 sm:p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
