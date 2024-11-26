"use client";

import HeaderDashboard from "@/components/HeaderDashboard";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderDashboard />
      <div className="relative flex min-h-screen bg-white">
        {/* Utiliser hidden sur petits écrans et block à partir de la taille md */}
        <Sidebar />
        <main className="flex-1 bg-white p-4 sm:p-8">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
