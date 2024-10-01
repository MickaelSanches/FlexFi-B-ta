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
      question: "How Does the Multi-Payment Option Work on FlexFi?",
      answer:
        "With FlexFi, your customers can split their payment into 6 or 12 monthly installments using cryptocurrencies. When a customer selects FlexFi at checkout, they choose their payment plan. You receive the full payment immediately, and FlexFi handles the collection of the installments.",
    },
    {
      question: "What Are the Fees for Using FlexFi?",
      answer:
        "FlexFi offers a transparent fee structure. Merchants pay competitive transaction fees with no hidden costs: 0% on standard transactions and 2% for BNPL. Integration is free, making it a simple and affordable solution.",
    },
    {
      question: "What Services Are Included with FlexFi?",
      answer: `FlexFi includes:
- Buy Now, Pay Later (BNPL) with cryptocurrency.
- Full support for integration.
- Access to consumer data to better understand your customers.`,
    },
    {
      question: "What Cryptocurrencies Are Accepted by FlexFi?",
      answer:
        "FlexFi accepts major cryptocurrencies, including Bitcoin (BTC), Solana (SOL), and several stablecoins like USDC and PYUSD. This allows your customers to choose their preferred crypto, providing greater flexibility.",
    },
    {
      question: "Is the Multi-Payment Feature Secure?",
      answer:
        "Yes. FlexFi uses blockchain technology and advanced security protocols to ensure transactions are secure. This guarantees the security of payments, giving you complete peace of mind.",
    },
    {
      question: "How Do I Integrate FlexFi in My Store?",
      answer:
        "Integrating FlexFi is simple. For online stores, we offer plugins compatible with major e-commerce platforms. In physical stores, FlexFi works via payment terminals or payment links. Our team assists you at every step for a quick setup.",
    },
    {
      question: "What Are the Conditions to Offer Multi-Installments?",
      answer:
        "To offer the multi-payment option, customers must complete a simple KYC verification and stake a minimum of $30 in cryptocurrency. This ensures transaction security and allows customers to benefit from flexible payment plans with no hidden fees.",
    },
  ];

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-32">
        <h2 className="text-4xl font-extrabold text-white mb-4">FAQ</h2>
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
