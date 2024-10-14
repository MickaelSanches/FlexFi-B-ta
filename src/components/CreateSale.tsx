import { useState } from "react";
import { useCrateSaleViewModel } from "@/viewmodels/useCreateSaleViewModel";
import { useAuthStore } from "@/store/useAuthStore";

const CreateSale = () => {
  const [price, setPrice] = useState("");
  const [installments, setInstallments] = useState<number | null>(null);
  const [buyerPublicKey, setBuyerPublicKey] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { publicKey } = useAuthStore();

  const { openModal, closeModal, handleSubmit, handleInstallmentClick } =
    useCrateSaleViewModel(
      setPrice,
      setIsModalOpen,
      setInstallments,
      setBuyerPublicKey
    );

  const onSubmit = (e: React.FormEvent) => {
    handleSubmit(
      e,
      publicKey,
      buyerPublicKey,
      parseFloat(price),
      installments!
    );
  };

  return (
    <div>
      {/* Bouton pour ouvrir la modale */}
      <button
        className="bg-[#0C8CF3] text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-5"
        onClick={openModal}
      >
        Create Sale
      </button>

      {/* Modale */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 border border-[#00FEFB] rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create a New Sale</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-gray-200">Price (SOL)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 w-full border border-gray-600 rounded px-3 py-2 bg-gray-700"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-200">Installments</label>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded ${
                      installments === 3
                        ? "bg-blue-500 text-white"
                        : "bg-gray-500"
                    }`}
                    onClick={() => handleInstallmentClick(3)}
                  >
                    3 Months
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded ${
                      installments === 6 ? "bg-blue-500 " : "bg-gray-500"
                    }`}
                    onClick={() => handleInstallmentClick(6)}
                  >
                    6 Months
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded ${
                      installments === 12
                        ? "bg-blue-500 text-white"
                        : "bg-gray-500"
                    }`}
                    onClick={() => handleInstallmentClick(12)}
                  >
                    12 Months
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-200">Buyer Public Key</label>
                <input
                  type="text"
                  value={buyerPublicKey}
                  onChange={(e) => setBuyerPublicKey(e.target.value)}
                  className="mt-1 w-full border border-gray-600 rounded px-3 py-2 bg-gray-700"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  disabled={!installments} // Désactiver le bouton si l'échéancier n'est pas sélectionné
                >
                  Create Sale
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateSale;
