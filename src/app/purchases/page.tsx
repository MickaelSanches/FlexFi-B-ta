"use client";

import PurchasesItem from "@/components/PurchasesItem";
import DashboardLayout from "../dashboard/layout";
import { useEffect, useState } from "react";
import { useMyPurchasesViewModel } from "@/viewmodels/useMyPurchasesViewModel";
import { bnplRepository } from "@/repositories/bnplRepository";

interface Purchase {
  id: number;
  seller_pubkey: string;
  amount: number;
  months: number;
  monthly_payment: string;
}

const Purchases: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const { onInit } = useMyPurchasesViewModel(setPurchases);
  const { downloadPurchaseInfoInPDF } = bnplRepository();

  useEffect(() => {
    onInit();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-gradient mb-8">My purchases</h1>
      <div className="space-y-4">
        {purchases.map((purchase, index) => (
          <div key={index} className="flex justify-between items-center">
            <PurchasesItem
              seller={purchase.seller_pubkey}
              monthlyAmount={purchase.monthly_payment}
              duration={purchase.months}
              totalPrice={purchase.amount}
            />
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Purchases;
