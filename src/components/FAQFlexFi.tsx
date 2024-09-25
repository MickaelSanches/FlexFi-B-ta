import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQFlexFi = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How does the multiple payment option work on FlexFi?",
      answer:
        "With FlexFi, you can split your purchases into multiple installments using cryptocurrency. Simply choose the payment plan that suits you best, and the payments will be automatically deducted from your wallet.",
    },
    {
      question: "What are the fees for using FlexFi?",
      answer:
        "FlexFi offers competitive fees of 0.5% per transaction. For premium users, staking rewards can reduce or even eliminate these fees.",
    },
    {
      question: "What services are included with FlexFi?",
      answer:
        "FlexFi includes flexible installment payments, staking rewards, and an API for merchants to integrate multi-payment options into their platform.",
    },
    {
      question: "What are the conditions to pay in multiple installments?",
      answer:
        "To use the multi-payment feature, users must complete the KYC process and ensure that their wallet is funded for upcoming payments.",
    },
    {
      question: "What cryptocurrencies are accepted by FlexFi?",
      answer:
        "FlexFi accepts various cryptocurrencies, including Bitcoin, Ethereum, Solana, and FlexFi tokens. More cryptocurrencies will be added in the future.",
    },
    {
      question: "Is the multi-payment feature secure?",
      answer:
        "Yes, FlexFi uses smart contracts on the Solana blockchain to ensure that each transaction is secure, transparent, and fully automated. Your funds are safe and protected.",
    },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#00FEFB] via-[#85C8FF] to-[#0C8CF3] bg-clip-text text-transparent mb-4">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <span className="text-gray-300">
                  {open === index ? "-" : "+"}
                </span>
              </div>
              {open === index && (
                <p className="mt-4 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
