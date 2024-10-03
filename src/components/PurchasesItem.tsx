import {
  FaUser,
  FaDollarSign,
  FaCalendarAlt,
  FaShoppingCart,
  FaCheckCircle,
} from "react-icons/fa";

interface Schedule {
  month_number: number;
  payment_amount: string;
  paid: boolean;
}

interface PurchasesItemProps {
  seller: string;
  monthlyAmount: string;
  duration: number;
  totalPrice: number;
  schedule: Schedule[];
}

const PurchasesItem: React.FC<PurchasesItemProps> = ({
  seller,
  monthlyAmount,
  duration,
  totalPrice,
  schedule,
}) => {
  // Calculer combien de mois ont été payés
  const paidMonths = schedule.filter((s) => s.paid).length;

  return (
    <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl ">
      <div className="flex justify-between items-center space-x-6 mb-4">
        <div className="flex items-center space-x-2">
          <FaUser className="text-indigo-400" />
          <span className="text-xl font-semibold">{seller}</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaDollarSign className="text-green-400" />
          <span className="text-xl">${monthlyAmount}/month</span>
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
            Total price: ${totalPrice}
          </span>
        </div>
      </div>

      {/* Section pour afficher le statut des paiements */}
      <div className="grid grid-cols-2 gap-4">
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform ${
              item.paid
                ? "bg-green-600 hover:bg-green-500"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <FaCheckCircle
              className={`${
                item.paid ? "text-white" : "text-gray-500"
              } text-xl transition-colors duration-300 ease-in-out`}
            />
            <span className="text-lg font-medium">
              payment {item.month_number}: ${item.payment_amount}{" "}
              <span
                className={`${
                  item.paid ? "text-green-200" : "text-red-400"
                } font-semibold`}
              >
                {item.paid ? "Paid" : "Unpaid"}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchasesItem;
