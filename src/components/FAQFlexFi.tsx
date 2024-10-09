import { usePageStore } from "@/store/usePageStore";
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

  const { isShopper } = usePageStore();

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

  const faqShoppers: FAQItem[] = [
    {
      question: "How do I sign up and get started with FlexFi?",
      answer:
        "To use FlexFi, simply sign up with your email address and complete a quick KYC verification. Once completed, you'll receive your wallet's private key and can start making payments in installments.",
    },
    {
      question: "How do I access BNPL with FlexFi?",
      answer:
        "FlexFi makes your life easier: just stake $30 to instantly unlock all premium benefits. No hidden fees, no monthly subscription. Access BNPL, enjoy exclusive partner coupons, and earn a return on your staking. Premium access gives you advantages that maximize your purchasing power.",
    },
    {
      question: "How does the multi-payment option work with FlexFi?",
      answer: `With FlexFi, pay for your purchases in 6 or 12 monthly installments directly in cryptocurrencies. The amount you stake determines how much you can spend with BNPL: staking $30 allows you to spend $30 with BNPL, while benefiting from competitive fees. Choose FlexFi at checkout, select your payment plan, and enjoy your purchase immediately. Simple, fast, and flexible.`,
    },
    {
      question: "What are the fees for using FlexFi?",
      answer:
        "No hidden fees, 0% penalties! FlexFi offers a transparent solution: 1% for standard payments and 12% for using the BNPL solution over 6 or 12 months. You can plan your payments with complete peace of mind, with no unpleasant surprises.",
    },
    {
      question: "What services are included with FlexFi?",
      answer: `With FlexFi, you get:
- BNPL (Buy Now, Pay Later): Split the cost of your purchase into multiple payments.
- User Support: Comprehensive assistance for any questions regarding payments or using FlexFi.
- Partner Coupons: Access exclusive coupons from our partners.`,
    },
    {
      question: "Which cryptocurrencies can I use with FlexFi?",
      answer:
        "FlexFi accepts a wide range of cryptocurrencies, including Bitcoin (BTC), Solana (SOL), and stablecoins like USDC and PYUSD. You can choose the cryptocurrency that suits you best for your payments.",
    },
    {
      question: "What happens if I don't pay on time?",
      answer: `FlexFi has an automated system to ensure the security of your BNPL, while staying transparent and fair. Here's how it works:

1. Commitment and Initial Staking: To unlock BNPL, you need to stake a minimum of $30, which gives you $30 of BNPL credit. Upon signing the contract, you commit to making your payments, which will be automatically deducted each month from your wallet.

2. Automatic Payments: For example, if you make a $30 purchase over 6 installments, $5.30 will be deducted each month (including a 12% fee). The first payment must be made to activate BNPL. Make sure you have enough funds in your wallet on the purchase date.

3. Notifications and Non-Payment Measures: If a payment fails, you will receive a notification to top up your wallet. You have 10 days to do so. If not completed, you start losing points in our trust scoring system.

4. Scoring and Consequences:
  - If you make all payments on time, you earn points, increasing your trust score and unlocking more features in the future.
  - If, at the end of 6 months, the remaining balance is not paid, the smart contract will automatically deduct the outstanding amount from your staking funds, with no additional fees. However, this results in a loss of points in your trust score.
  - If your score drops below 50/100, BNPL access is deactivated. To reactivate, you need to stake at least $30 again and use single payments to earn points. Once your score reaches 51/100, premium access is restored.`,
    },
    {
      question: "Is the multi-payment feature secure?",
      answer: `Yes, your transactions are fully secure with blockchain technology and advanced security protocols used by FlexFi. All transactions are protected, providing you with peace of mind and maximum security.`,
    },
  ];

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-32">
        <h2 className="font-display text-4xl font-extrabold text-white mb-4">
          FAQ
        </h2>
        <div className="space-y-4">
          {!isShopper
            ? faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 py-4 cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white font-display">
                      {faq.question}
                    </h3>
                    <span className="text-gray-300">
                      {open === index ? "-" : "+"}
                    </span>
                  </div>
                  {open === index && (
                    <p className="mt-4 text-gray-300 text-base sm:text-xl">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))
            : faqShoppers.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 py-4 cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white font-display">
                      {faq.question}
                    </h3>
                    <span className="text-gray-300">
                      {open === index ? "-" : "+"}
                    </span>
                  </div>
                  {open === index && (
                    <p className="mt-4 text-gray-300 text-base sm:text-xl">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
