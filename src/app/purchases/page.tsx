"use client";

import PurchasesItem from "@/components/PurchasesItem";
import DashboardLayout from "../dashboard/layout";
import { useEffect, useState } from "react";
import { useMyPurchasesViewModel } from "@/viewmodels/useMyPurchasesViewModel";

interface Schedule {
  id: number;
  sale_id: number;
  month_number: number;
  payment_amount: string;
  due_date: string;
  paid: boolean;
  payment_hash: string;
  created_at: string;
}

interface Purchase {
  id: number;
  seller_pubkey: string;
  amount: number;
  months: number;
  monthly_payment: string;
  schedule: Schedule[];
}

const Purchases: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const { onInit } = useMyPurchasesViewModel(purchases, setPurchases);

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
              schedule={purchase.schedule}
            />
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Purchases;
