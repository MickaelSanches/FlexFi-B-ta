interface FeatureSmartphoneCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  apr: string;
  points: string[];
  aprTextColor: string;
}

const FeatureSmartphoneCard: React.FC<FeatureSmartphoneCardProps> = ({
  imageSrc,
  title,
  subtitle,
  apr,
  points,
  aprTextColor,
}) => {
  return (
    <div className="relative w-auto max-w-md h-[600px] mx-5">
      <img
        src={imageSrc}
        alt={`${title} Background`}
        className="w-full h-full object-cover rounded-[2rem]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-black font-display text-2xl font-bold">{title}</h1>
        <p className="text-black mt-4">{subtitle}</p>
        <div
          className={`mt-6 font-display bg-[#39576C] text-[${aprTextColor}] text-lg font-bold py-4 px-8 rounded-full`}
        >
          {apr}
        </div>
        <ul className="mt-6 text-black space-y-2 text-left">
          {points.map((point, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-lg">➤</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureSmartphoneCard;
