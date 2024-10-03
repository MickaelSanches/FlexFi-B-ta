import {
  FaUser,
  FaCalendarAlt,
  FaShoppingCart,
  FaCheckCircle,
  FaTimesCircle, // Import de l'icône de croix
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
          {/* Votre icône personnalisée */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M23.876 18.031l-3.962 4.14a.9.9 0 01-.306.21.9.9 0 01-.367.074H.46a.47.47 0 01-.252-.073.45.45 0 01-.17-.196.44.44 0 01-.031-.255.44.44 0 01.117-.23l3.965-4.139a.9.9 0 01.305-.21.9.9 0 01.366-.075h18.78a.47.47 0 01.252.074.45.45 0 01.17.196.44.44 0 01.031.255.44.44 0 01-.117.23zM19.914 9.696a.9.9 0 00-.306-.21.9.9 0 00-.367-.075H.46a.47.47 0 00-.252.073.45.45 0 00-.17.197.44.44 0 00-.031.254.44.44 0 00.117.23l3.965 4.14a.9.9 0 00.305.21.9.9 0 00.366.074h18.78a.47.47 0 00.252-.073.45.45 0 00.17-.196.44.44 0 00.031-.255.44.44 0 00-.117-.23zM.46 6.723h18.782a.9.9 0 00.367-.075.9.9 0 00.306-.21l3.962-4.14a.44.44 0 00.117-.23.44.44 0 00-.032-.254.45.45 0 00-.17-.196A.47.47 0 0022.202 2H4.76a.9.9 0 00-.366.074.9.9 0 00-.305.21L.125 5.97a.44.44 0 00-.117.23.44.44 0 00.03.254.45.45 0 00.17.196c.075.046.162.073.252.074z"
            />
          </svg>
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
            {/* Utilisation conditionnelle de l'icône */}
            {item.paid ? (
              <FaCheckCircle className="text-white text-xl transition-colors duration-300 ease-in-out" />
            ) : (
              <FaTimesCircle className="text-red-500 text-xl transition-colors duration-300 ease-in-out" />
            )}
            <span className="text-lg font-medium flex items-center gap-2">
              payment {item.month_number}: {item.payment_amount}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23.876 18.031l-3.962 4.14a.9.9 0 01-.306.21.9.9 0 01-.367.074H.46a.47.47 0 01-.252-.073.45.45 0 01-.17-.196.44.44 0 01-.031-.255.44.44 0 01.117-.23l3.965-4.139a.9.9 0 01.305-.21.9.9 0 01.366-.075h18.78a.47.47 0 01.252.074.45.45 0 01.17.196.44.44 0 01.031.255.44.44 0 01-.117.23zM19.914 9.696a.9.9 0 00-.306-.21.9.9 0 00-.367-.075H.46a.47.47 0 00-.252.073.45.45 0 00-.17.197.44.44 0 00-.031.254.44.44 0 00.117.23l3.965 4.14a.9.9 0 00.305.21.9.9 0 00.366.074h18.78a.47.47 0 00.252-.073.45.45 0 00.17-.196.44.44 0 00.031-.255.44.44 0 00-.117-.23zM.46 6.723h18.782a.9.9 0 00.367-.075.9.9 0 00.306-.21l3.962-4.14a.44.44 0 00.117-.23.44.44 0 00-.032-.254.45.45 0 00-.17-.196A.47.47 0 0022.202 2H4.76a.9.9 0 00-.366.074.9.9 0 00-.305.21L.125 5.97a.44.44 0 00-.117.23.44.44 0 00.03.254.45.45 0 00.17.196c.075.046.162.073.252.074z"
                />
              </svg>{" "}
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
