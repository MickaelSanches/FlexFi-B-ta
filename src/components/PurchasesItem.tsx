import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import {
  FaUser,
  FaCalendarAlt,
  FaShoppingCart,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

interface Schedule {
  id: number;
  month_number: number;
  payment_amount: string;
  paid: boolean;
}

interface PurchasesItemProps {
  id: number;
  seller: string;
  buyer: string;
  monthlyAmount: string;
  duration: number;
  totalPrice: number;
  schedule: Schedule[];
  onPaymentButtonClick: (saleId: number, scheduleId: number) => Promise<void>;
}

const PurchasesItem: React.FC<PurchasesItemProps> = ({
  seller,
  buyer,
  monthlyAmount,
  duration,
  totalPrice,
  schedule,
  onPaymentButtonClick,
  id,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(
    null
  );

  const { siren } = useAuthStore();

  // Ouvrir la modale de confirmation
  const openModal = (scheduleId: number) => {
    setSelectedScheduleId(scheduleId);
    setIsModalOpen(true);
  };

  // Fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedScheduleId(null);
  };

  // Confirmer le paiement
  const confirmPayment = async () => {
    if (selectedScheduleId !== null) {
      await onPaymentButtonClick(id, selectedScheduleId);
      closeModal(); // Fermer la modale après paiement
    }
  };

  const paidMonths = schedule.filter((s) => s.paid).length;
  const allPaid = paidMonths === duration; // Vérifier si toutes les mensualités ont été payées

  return (
    <div
      className={`${
        allPaid ? "bg-green-600" : "bg-gray-900"
      } text-white p-8 rounded-3xl shadow-2xl transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center space-x-6 mb-4">
        <div className="flex items-center space-x-2">
          <FaUser className="text-indigo-400" />
          {siren ? (
            <span className="text-xl font-semibold">{buyer}</span>
          ) : (
            <span className="text-xl font-semibold">{seller}</span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xl">{monthlyAmount} SOL/month</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-yellow-400" />
          <span className="text-xl">
            {paidMonths}/{duration} months
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <FaShoppingCart className="text-pink-400" />
          <span className="text-xl font-semibold">
            Total price: {totalPrice} SOL
          </span>
        </div>
      </div>

      {/* Section pour afficher le statut des paiements, masqué si tout est payé */}
      {!allPaid && (
        <div className="grid grid-cols-2 gap-4">
          {schedule.map((item, index) => (
            <button
              onClick={() => openModal(item.id)}
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform ${
                item.paid
                  ? "bg-green-600 hover:bg-green-500"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {item.paid ? (
                <FaCheckCircle className="text-white text-xl transition-colors duration-300 ease-in-out" />
              ) : (
                <FaTimesCircle className="text-red-500 text-xl transition-colors duration-300 ease-in-out" />
              )}
              {!item.paid && (
                <span className="text-lg font-medium flex items-center gap-2">
                  Payer {item.month_number}: {item.payment_amount}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Modale de confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">
              Confirmation de paiement
            </h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to pay this installment ?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                onClick={closeModal}
              >
                Annuler
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={confirmPayment}
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchasesItem;
