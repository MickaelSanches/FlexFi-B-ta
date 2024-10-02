import {
  FaUser,
  FaDollarSign,
  FaCalendarAlt,
  FaShoppingCart,
} from "react-icons/fa";

interface PurchasesItemProps {
  seller: string;
  monthlyAmount: string;
  duration: number;
  totalPrice: number;
}

const PurchasesItem: React.FC<PurchasesItemProps> = ({
  seller,
  monthlyAmount,
  duration,
  totalPrice,
}) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex justify-between items-center space-x-6">
      <div className="flex items-center space-x-2">
        <FaUser className="text-indigo-400" />
        <span className="text-lg font-semibold">{seller}</span>
      </div>

      <div className="flex items-center space-x-2">
        <FaDollarSign className="text-green-400" />
        <span className="text-lg">${monthlyAmount}/month</span>
      </div>

      <div className="flex items-center space-x-2">
        <FaCalendarAlt className="text-yellow-400" />
        <span className="text-lg">{duration} months</span>
      </div>

      <div className="flex items-center space-x-2">
        <FaShoppingCart className="text-pink-400" />
        <span className="text-lg font-semibold">
          Total price: ${totalPrice}
        </span>
      </div>
    </div>
  );
};

export default PurchasesItem;
