import { Dispatch, SetStateAction, useState } from "react";

interface SimulatorCardProps {
  title: string;
  percentage: string; // ou number si c'est une valeur numérique
  description: string;
  rangeProps: React.InputHTMLAttributes<HTMLInputElement>; // Typage pour un champ input range
  extraContent?: React.ReactNode; // Pour tout contenu JSX optionnel
  HowManyPayment: boolean;
  bgCodeCouleur: string; // Couleur d'arrière-plan passée en prop
  instalment?: number;
  setInstalment: Dispatch<SetStateAction<number>>;
}

const SimulatorCard: React.FC<SimulatorCardProps> = ({
  title,
  percentage,
  description,
  rangeProps,
  extraContent,
  HowManyPayment,
  bgCodeCouleur,
  instalment,
  setInstalment,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Gérer l'ouverture du menu déroulant

  const handleOptionClick = (value: number) => {
    setInstalment(value);
    setIsDropdownOpen(false); // Fermer le menu après sélection
  };

  return (
    <div
      style={{ backgroundColor: bgCodeCouleur }}
      className="flex flex-col justify-between p-4 md:p-8 rounded-3xl shadow-md text-center relative w-full sm:w-[300px] md:w-[350px] mx-auto md:mx-5"
    >
      {/* Badge pourcentage avec bordure dégradée */}
      <div className="absolute top-[-10px] sm:top-[-20px] right-[-10px] sm:right-[-20px] w-16 sm:w-24 h-16 sm:h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#39576C] to-[#fbfbfb] p-[1px] sm:p-[2px]">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="text-xl sm:text-2xl font-display font-bold">
              {percentage}
            </span>
          </div>
        </div>
      </div>

      {/* Titre */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-neutral-900 uppercase tracking-wide">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-2 text-neutral-700 font-sans text-sm sm:text-base">
        {description}
      </p>

      {/* Barre de progression */}
      <div className="mt-6 flex items-center">
        <input
          type="range"
          {...rangeProps}
          className="w-full appearance-none bg-neutral-300 h-2 rounded-full"
          style={{ accentColor: "#334155" }}
        />
        {HowManyPayment ? (
          <div className="relative ml-2 sm:ml-4">
            <div
              className="bg-white border-2 border-[#39576C] text-neutral-700 rounded-2xl w-12 h-10 sm:w-16 sm:h-12 flex items-center justify-center text-base sm:text-lg font-bold shadow-sm cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle du menu
            >
              {instalment}x
            </div>
            {isDropdownOpen && (
              <ul className="absolute z-10 bg-white border border-[#39576C] rounded-lg shadow-lg mt-2 w-16 sm:w-20 text-center">
                {Array.from({ length: 12 }, (_, index) => index + 1).map(
                  (_, index) => {
                    const value = index + 1;
                    return (
                      <li
                        key={value}
                        className="cursor-pointer p-2 hover:bg-[#39576C] hover:text-white"
                        onClick={() => handleOptionClick(value)}
                      >
                        {value}x
                      </li>
                    );
                  }
                )}
              </ul>
            )}
          </div>
        ) : null}
      </div>

      {/* Contenu additionnel */}
      <div className="mt-4 sm:mt-6">{extraContent}</div>
    </div>
  );
};

export default SimulatorCard;
