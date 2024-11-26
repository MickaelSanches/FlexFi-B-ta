"use client";

import { useEffect, useState } from "react";
import PurchasesItem from "@/components/PurchasesItem";
import DashboardLayout from "../dashboard/layout";
import { useMyPurchasesViewModel } from "@/viewmodels/useMyPurchasesViewModel";
import CreateSale from "@/components/CreateSale";
import { useAuthStore } from "@/store/useAuthStore";
import { Purchase } from "@/@Types/purchase";

const Purchases: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [filteredPurchases, setFilteredPurchases] = useState<Purchase[]>([]);
  const { onInit, filterPurchases, onPaymentButtonClick } =
    useMyPurchasesViewModel(setPurchases, setFilteredPurchases);
  const { siren, isLogged } = useAuthStore();

  // État pour le tri
  const [sortOrder, setSortOrder] = useState<
    | "dateAsc"
    | "dateDesc"
    | "priceAsc"
    | "priceDesc"
    | "paid"
    | "unpaid"
    | "all"
  >("all");

  useEffect(() => {
    if (isLogged) {
      onInit();
    }
  }, [isLogged]);

  useEffect(() => {
    const filtered = filterPurchases(purchases, sortOrder);
    setFilteredPurchases(filtered);
  }, [purchases, sortOrder]);

  return (
    <DashboardLayout>
      <h1 className="text-2xl text-black font-display sm:text-4xl font-bold text-gradient mb-8 text-center sm:text-left">
        My purchases
      </h1>

      {siren && <CreateSale />}

      {/* Menu déroulant pour le tri */}
      <div className="mb-4 w-full sm:w-52">
        <label className="block text-gray-800 mb-2">Sort by:</label>
        <select
          className="mt-1 block w-full px-3 py-2 bg-white text-black border border-[#D8E6ED] rounded-lg"
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(
              e.target.value as
                | "dateAsc"
                | "dateDesc"
                | "priceAsc"
                | "priceDesc"
                | "paid"
                | "unpaid"
                | "all"
            )
          }
        >
          <option value="all">All</option>
          <option value="dateAsc">Date (Ascending)</option>
          <option value="dateDesc">Date (Descending)</option>
          <option value="priceAsc">Price (Low to High)</option>
          <option value="priceDesc">Price (High to Low)</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
      </div>

      {/* Liste des achats filtrés */}
      <div className="space-y-4">
        {filteredPurchases.map((purchase, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0"
          >
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
