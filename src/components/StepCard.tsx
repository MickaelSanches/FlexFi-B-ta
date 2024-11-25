import React from "react";

// Define prop types for StepCard
interface StepCardProps {
  stepNumber: string;
  title: string;
  content: string[];
  bgColor: string;
  reverse: boolean;
  textColor: string;
}

// StepCard Component
const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  content,
  bgColor,
  reverse,
  textColor,
}) => {
  return (
    <div
      className={`relative w-72 flex flex-col p-6 rounded-lg shadow-2xl ${bgColor} transition-transform duration-300 hover:scale-105 ${
        reverse
          ? "transform md:translate-x-1/4 m-4 md:-mt-8 md:z-10"
          : "transform md:-translate-x-1/4 m-4 md:-mt-8"
      }`}
    >
      {/* Step Number */}
      <div className={`flex ${reverse ? "justify-end" : "justify-start"}`}>
        <p className="flex items-center justify-center w-14 h-14 bg-black text-white rounded-lg shadow-md font-bold text-xl">
          {stepNumber}
        </p>
      </div>
      {/* Content */}
      <div className="mt-4">
        <h2 className={`text-2xl font-semibold mb-4 text-${textColor}`}>
          {title}
        </h2>
        <ul className={`text-base space-y-2 text-${textColor}`}>
          {content.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="font-bold mr-2">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Define types for steps
interface Step {
  stepNumber: string;
  title: string;
  content: string[];
  bgColor: string;
  reverse: boolean;
  textColor: string;
}

// StepsContainer Component
const StepsContainer: React.FC = () => {
  const steps: Step[] = [
    {
      stepNumber: "1",
      title: "Subscription",
      content: [
        "Register your email",
        "Verify your email",
        "Receive your wallet’s private key and seed phrase",
      ],
      bgColor: "bg-white",
      reverse: false,
      textColor: "black",
    },
    {
      stepNumber: "2",
      title: "Unlock Features",
      content: [
        "Complete simplified KYC verification",
        "Stake a minimum of 30 USDC",
        "Unlock access to BNPL",
        "Fund your wallet to spend",
      ],
      bgColor: "bg-blue-100",
      reverse: true,
      textColor: "black",
    },
    {
      stepNumber: "3",
      title: "Purchase",
      content: [
        "Choose the product you want to buy",
        "Select FlexFi at checkout",
        "Choose your BNPL plan and confirm the order",
      ],
      bgColor: "bg-[#3A576C] text-white",
      reverse: false,
      textColor: "white",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "url('images/Background_buy_now_Payer_later_Flexfi.webp')",
      }}
      className="relative bg-cover bg-center flex flex-col items-center text-black"
    >
      {steps.map((step, index) => (
        <StepCard
          key={index}
          stepNumber={step.stepNumber}
          title={step.title}
          content={step.content}
          bgColor={step.bgColor}
          reverse={step.reverse}
          textColor={step.textColor}
        />
      ))}
    </div>
  );
};

export default StepsContainer;
