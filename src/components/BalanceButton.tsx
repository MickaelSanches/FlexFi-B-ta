"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useWalletStore } from "@/store/useWalletStore";
import { useDashboardViewModel } from "@/viewmodels/useDashboardViewModel";
import React, { useEffect } from "react";

const BalanceButton = () => {
  const { onInit } = useDashboardViewModel();
  const { ammount } = useWalletStore();
  const { isLogged } = useAuthStore();

  useEffect(() => {
    console.log("Initialisation du Dashboard, islogged = " + isLogged);
    onInit();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center rounded-full bg-black text-white px-4 py-4 sm:py-2 border border-[#00FEFB] w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
      <span className="text-lg sm:text-xl font-medium font-display leading-none text-center sm:text-left">
        Balance
      </span>
      <span className="mt-2 sm:mt-0 sm:ml-6 text-xl sm:text-2xl font-bold text-[#00FEFB] leading-tight flex items-end text-center sm:text-right">
        {ammount !== null && ammount !== undefined
          ? `${ammount.toFixed(4)} SOL`
          : "N/A"}{" "}
      </span>
    </div>
  );
};

export default BalanceButton;
