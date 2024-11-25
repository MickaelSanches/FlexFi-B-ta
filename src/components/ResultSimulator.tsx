interface ResultSimulatorProps {
  stakingAmount: number; // Montant staké
  stakingEarnings: string; // Gains générés par le staking
  monthlyPayment: string; // Paiement mensuel pour BNPL
  totalCost: number; // Coût total pour BNPL
  instalment?: number;
}

const ResultSimulator: React.FC<ResultSimulatorProps> = ({
  stakingAmount,
  stakingEarnings,
  monthlyPayment,
  totalCost,
  instalment,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 rounded-lg max-w-lg mx-auto">
      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row md:items-start md:space-x-10 relative">
        {/* Bloc gauche */}
        <div className="bg-white border border-gray-300 p-6 rounded-2xl w-full md:w-96 pr-6 md:pr-28 relative shadow-md">
          {/* Staking */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-black mb-2 font-display">
              Staking
            </h2>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Staking amount</span>
              <span className="font-medium">
                {stakingAmount.toFixed(2)} USDC
              </span>
            </div>
            {/* Ligne séparatrice */}
            <div className="w-full border-t border-dashed border-gray-300 my-2"></div>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Total Earning</span>
              <span className="font-medium">
                {(stakingAmount + parseFloat(stakingEarnings)).toFixed(2)} USDC
              </span>
            </div>
          </div>

          {/* BNPL */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2 font-display">
              BNPL ({instalment}X)
            </h2>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Monthly payment</span>
              <span className="font-medium">{monthlyPayment} USDC</span>
            </div>
            {/* Ligne séparatrice */}
            <div className="w-full border-t border-dashed border-gray-300 my-2"></div>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Fees</span>
              <span className="font-medium">0.00 USDC</span>
            </div>
            {/* Ligne séparatrice */}
            <div className="w-full border-t border-dashed border-gray-300 my-2"></div>
            <div className="mb-6 md:mb-0 flex justify-between text-sm text-gray-700">
              <span>Total cost</span>
              <span className="font-medium">{totalCost.toFixed(2)} USDC</span>
            </div>
          </div>
          {/* Cercle dans le coin inférieur droit */}
          <div className="md:absolute md:bottom-0 md:right-0 md:transform md:translate-x-3/4 md:translate-y-1/4">
            <div className="relative w-40 h-40 md:w-60 md:h-60 bg-[#3A576C] rounded-full flex flex-col items-center justify-center text-white shadow-2xl">
              {/* Effet de lueur */}
              <div className="absolute inset-0 rounded-full bg-[#3A576C] blur-3xl opacity-30"></div>
              <div className="text-center z-10">
                <p className="text-md md:text-lg font-display text-start font-semibold">
                  TOTAL <br /> EARNING
                </p>
                <div className="mt-4 w-full md:mt-6 flex items-center border-2 border-[#39576C] justify-between bg-white rounded-2xl  py-2 md:py-3 shadow-sm">
                  <input
                    type="number"
                    min="0"
                    max="2000"
                    value={stakingEarnings}
                    placeholder=""
                    className="w-full text-center font-display text-sm text-neutral-700 outline-none"
                  />
                  <span className="text-blue-600 text-sm md:text-2xl font-bold ml-2">
                    $
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Texte "0% Fees" */}
      <div className="mt-8 text-2xl md:text-4xl font-extrabold text-black font-display">
        0% FEES
      </div>
    </div>
  );
};

export default ResultSimulator;
