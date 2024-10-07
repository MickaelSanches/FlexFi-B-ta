import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import {
  FaUser,
  FaCalendarAlt,
  FaShoppingCart,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { Purchase } from "@/@Types/purchase";

interface PurchasesItemProps {
  purchase: Purchase;
  onPaymentButtonClick: (saleId: number, scheduleId: number) => Promise<void>;
}

const PurchasesItem: React.FC<PurchasesItemProps> = ({
  purchase,
  onPaymentButtonClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(
    null
  );
  const [showFullPubKey, setShowFullPubKey] = useState(false); // État pour afficher la clé complète

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
      await onPaymentButtonClick(purchase.id, selectedScheduleId);
      closeModal(); // Fermer la modale après paiement
    }
  };

  const paidMonths = purchase.schedule.filter((s) => s.paid).length;
  const allPaid = paidMonths === purchase.months; // Vérifier si toutes les mensualités ont été payées

  // Formater la date de création
  const formattedCreatedDate = format(
    new Date(purchase.created_at),
    "dd MMM yyyy",
    {
      locale: enUS,
    }
  );

  return (
    <div
      className={`${
        allPaid ? "bg-green-600" : "bg-gray-900"
      } text-white p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out space-y-6`}
    >
      {/* Disposition verticale pour mobile, horizontale pour plus grand */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Informations utilisateur */}
        <div className="flex items-center space-x-3">
          <FaUser className="text-indigo-400 text-xl" />
          <span
            className="text-lg sm:text-xl font-semibold cursor-pointer"
            onClick={() => setShowFullPubKey(!showFullPubKey)} // Afficher ou masquer la pubKey entière
          >
            {showFullPubKey
              ? siren
                ? purchase.buyer_pubkey
                : purchase.seller_pubkey
              : siren
              ? `${purchase.buyer_pubkey.slice(0, 8)}...`
              : `${purchase.seller_pubkey.slice(0, 8)}...`}
          </span>
        </div>

        {/* Paiement mensuel */}
        <div className="flex items-center space-x-3">
          <span className="text-lg sm:text-xl font-medium">
            {purchase.monthly_payment} SOL/month
          </span>
        </div>

        {/* Durée de paiement */}
        <div className="flex items-center space-x-3">
          <FaCalendarAlt className="text-yellow-400 text-xl" />
          <span className="text-lg sm:text-xl font-medium">
            {paidMonths}/{purchase.months} months
          </span>
        </div>

        {/* Prix total */}
        <div className="flex items-center space-x-3">
          <FaShoppingCart className="text-pink-400 text-xl" />
          <span className="text-lg sm:text-xl font-semibold">
            {purchase.amount} SOL
          </span>
        </div>
      </div>

      {/* Date de création */}
      <div className="text-sm sm:text-base text-gray-400">
        Sale created on: {formattedCreatedDate}
      </div>

      {/* Section pour afficher le statut des paiements */}
      {!allPaid && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {purchase.schedule.map((item, index) => {
            const formattedDueDate = format(
              new Date(item.due_date),
              "dd MMM yyyy",
              {
                locale: enUS,
              }
            );
            return (
              <button
                onClick={() => (!siren ? openModal(item.id) : null)}
                key={index}
                className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 ease-in-out transform ${
                  item.paid
                    ? "bg-green-500 hover:bg-green-400"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {item.paid ? (
                  <FaCheckCircle className="text-white text-xl transition-colors duration-300 ease-in-out" />
                ) : (
                  <FaTimesCircle className="text-red-500 text-xl transition-colors duration-300 ease-in-out" />
                )}
                <span className="text-sm sm:text-base font-medium">
                  {item.paid
                    ? "Paid"
                    : `Due on ${formattedDueDate} - Month ${item.month_number}: ${item.payment_amount} SOL`}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Modale de confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 w-full sm:w-96">
            <h2 className="text-xl font-semibold mb-4">
              Confirmation de paiement
            </h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to pay this installment?
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
