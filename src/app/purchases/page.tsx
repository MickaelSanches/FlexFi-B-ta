import PurchasesItem from "@/components/PurchasesItem";
import DashboardLayout from "../dashboard/layout";
import { useState } from "react";

const Purchases = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [sellerPublicKey, setSellerPublicKey] = useState<string>("");
  const [paymentDurationInMonths, setPaymentDurationInMonths] =
    useState<string>("");
  const [monthlyPaymentAmount, setMonthlyPaymentAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-gradient mb-8">My purchases</h1>
      <PurchasesItem />
    </DashboardLayout>
  );
};

export default Purchases;
