"use client";

import PurchasesItem from "@/components/PurchasesItem";
import DashboardLayout from "../dashboard/layout";
import { useEffect, useState } from "react";
import { useMyPurchasesViewModel } from "@/viewmodels/useMyPurchasesViewModel";
import CreateSale from "@/components/CreateSale";
import { useAuthStore } from "@/store/useAuthStore";
import { Purchase } from "@/@Types/purchase";

const Purchases: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const { onInit, onPaymentButtonClick } =
    useMyPurchasesViewModel(setPurchases);
  const { siren } = useAuthStore();

  useEffect(() => {
    onInit();
  }, [purchases]);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-gradient mb-8">My purchases</h1>
      {siren && <CreateSale />}
      <div className="space-y-4">
        {purchases.map((purchase, index) => (
          <div key={index} className="flex justify-between items-center">
            <PurchasesItem
              purchase={purchase}
              onPaymentButtonClick={onPaymentButtonClick}
            />
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Purchases;
