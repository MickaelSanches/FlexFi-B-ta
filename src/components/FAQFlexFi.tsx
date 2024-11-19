import { usePageStore } from "@/store/usePageStore";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useEffect, useRef, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQFlexFi = () => {
  const { isShopper } = usePageStore();
  const { isEnglish } = useLanguageStore();
  const [open, setOpen] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs: FAQItem[] = isEnglish
    ? [
        {
          question: "How Does the Multi-Payment Option Work on FlexFi?",
          answer:
            "With FlexFi, your customers can split their payment into 6 or 12 monthly installments using cryptocurrencies. You receive the full payment immediately, and FlexFi handles the collection of installments.",
        },
        {
          question: "What Are the Fees for Using FlexFi?",
          answer:
            "FlexFi offers a transparent fee structure. Merchants pay competitive transaction fees with no hidden costs: 0% on standard transactions and 2% for BNPL. Integration is free.",
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
            "FlexFi accepts major cryptocurrencies, including Bitcoin (BTC), Solana (SOL), and several stablecoins like USDC and PYUSD. This provides greater flexibility.",
        },
        {
          question: "Is the Multi-Payment Feature Secure?",
          answer:
            "Yes. FlexFi uses blockchain technology and advanced security protocols to ensure secure transactions, giving you peace of mind.",
        },
        {
          question: "How Do I Integrate FlexFi in My Store?",
          answer:
            "Integrating FlexFi is simple. For online stores, we offer plugins compatible with major e-commerce platforms. In physical stores, FlexFi works via payment terminals or payment links.",
        },
        {
          question: "What Are the Conditions to Offer Multi-Installments?",
          answer:
            "To offer the multi-payment option, customers must complete a simple KYC verification and stake a minimum of $30 in cryptocurrency.",
        },
      ]
    : [
        {
          question: "¿Cómo Funciona la Opción de Pago en Cuotas en FlexFi?",
          answer:
            "Con FlexFi, tus clientes pueden dividir su pago en 6 o 12 cuotas mensuales usando criptomonedas. Recibes el pago completo de inmediato, y FlexFi se encarga de la recolección de las cuotas.",
        },
        {
          question: "¿Cuáles Son las Tarifas por Usar FlexFi?",
          answer:
            "FlexFi ofrece una estructura de tarifas transparente. Los comerciantes pagan tarifas de transacción competitivas sin costos ocultos: 0% en transacciones estándar y 2% para BNPL. La integración es gratuita.",
        },
        {
          question: "¿Qué Servicios Están Incluidos con FlexFi?",
          answer: `FlexFi incluye:
- Compra ahora, paga después (BNPL) con criptomonedas.
- Soporte completo para la integración.
- Acceso a datos del consumidor para comprender mejor a sus clientes.`,
        },
        {
          question: "¿Qué Criptomonedas Acepta FlexFi?",
          answer:
            "FlexFi acepta criptomonedas importantes, incluidas Bitcoin (BTC), Solana (SOL) y varias stablecoins como USDC y PYUSD. Esto proporciona una mayor flexibilidad.",
        },
        {
          question: "¿Es Segura la Función de Pago en Cuotas?",
          answer:
            "Sí. FlexFi utiliza tecnología blockchain y protocolos de seguridad avanzados para garantizar transacciones seguras, brindándote tranquilidad.",
        },
        {
          question: "¿Cómo Integro FlexFi en Mi Tienda?",
          answer:
            "Integrar FlexFi es simple. Para tiendas en línea, ofrecemos plugins compatibles con las principales plataformas de comercio electrónico. En tiendas físicas, FlexFi funciona a través de terminales de pago o enlaces de pago.",
        },
        {
          question:
            "¿Cuáles Son las Condiciones para Ofrecer el Pago en Cuotas?",
          answer:
            "Para ofrecer la opción de pago en cuotas, los clientes deben completar una verificación KYC simple y hacer un staking mínimo de $30 en criptomonedas.",
        },
      ];

  const faqShoppers: FAQItem[] = isEnglish
    ? [
        {
          question: "How do I sign up and get started with FlexFi?",
          answer:
            "To use FlexFi, sign up with your email and complete a quick KYC verification. Once completed, you'll receive your wallet's private key.",
        },
        {
          question: "How do I access BNPL with FlexFi?",
          answer:
            "Stake $30 to unlock all premium benefits. Access BNPL, enjoy exclusive partner coupons, and earn returns on your staking.",
        },
        {
          question: "How does the multi-payment option work with FlexFi?",
          answer:
            "With FlexFi, pay for purchases in 6 or 12 monthly installments in cryptocurrencies. Stake $30 to access BNPL for a flexible, low-cost option.",
        },
        {
          question: "What are the fees for using FlexFi?",
          answer:
            "No hidden fees, 0% penalties! FlexFi charges 1% for standard payments and 12% for BNPL over 6 or 12 months.",
        },
        {
          question: "What services are included with FlexFi?",
          answer: `With FlexFi, you get:
- BNPL: Split the cost of your purchase into multiple payments.
- User Support: Assistance for any payment-related queries.
- Partner Coupons: Access exclusive partner discounts.`,
        },
        {
          question: "Which cryptocurrencies can I use with FlexFi?",
          answer:
            "FlexFi accepts Bitcoin (BTC), Solana (SOL), and stablecoins like USDC and PYUSD for payment flexibility.",
        },
        {
          question: "What happens if I don't pay on time?",
          answer: `FlexFi provides a structured approach for missed payments:
1. Commitment and Initial Staking: Unlock BNPL with a $30 stake, securing $30 in credit. Monthly payments auto-deduct from your wallet.
2. Automatic Payments: Each month, the fee is deducted automatically. Keep enough funds in your wallet on payment dates.
3. Notifications: If a payment fails, receive a reminder to fund your wallet within 10 days. Failure results in a lower trust score.
4. Scoring and Consequences: On-time payments improve your trust score; non-payment results in score reduction, affecting future BNPL access.`,
        },
      ]
    : [
        {
          question: "¿Cómo me registro y comienzo con FlexFi?",
          answer:
            "Para usar FlexFi, simplemente regístrate con tu correo electrónico y completa una verificación rápida de KYC. Una vez completado, recibirás la clave privada de tu billetera.",
        },
        {
          question: "¿Cómo accedo a BNPL con FlexFi?",
          answer:
            "Haz staking de $30 para desbloquear todos los beneficios premium. Accede a BNPL, disfruta de cupones exclusivos de nuestros socios y gana rendimientos.",
        },
        {
          question: "¿Cómo funciona la opción de pago en cuotas con FlexFi?",
          answer:
            "Con FlexFi, paga tus compras en 6 o 12 cuotas mensuales en criptomonedas. Haz staking de $30 para acceder a BNPL con una opción flexible y de bajo costo.",
        },
        {
          question: "¿Cuáles son las tarifas por usar FlexFi?",
          answer:
            "¡Sin tarifas ocultas ni penalizaciones! FlexFi cobra 1% para pagos estándar y 12% para BNPL en 6 o 12 meses.",
        },
        {
          question: "¿Qué servicios están incluidos con FlexFi?",
          answer: `Con FlexFi, obtienes:
- BNPL: Divide el costo de tu compra en varios pagos.
- Soporte al Usuario: Asistencia para cualquier consulta relacionada con pagos.
- Cupones de Socios: Accede a descuentos exclusivos de nuestros socios.`,
        },
        {
          question: "¿Qué criptomonedas puedo usar con FlexFi?",
          answer:
            "FlexFi acepta Bitcoin (BTC), Solana (SOL) y stablecoins como USDC y PYUSD para flexibilidad en los pagos.",
        },
        {
          question: "¿Qué pasa si no pago a tiempo?",
          answer: `FlexFi proporciona un enfoque estructurado para pagos fallidos:
1. Compromiso y Staking Inicial: Desbloquea BNPL con un staking de $30, asegurando $30 en crédito. Los pagos mensuales se deducen automáticamente de tu billetera.
2. Pagos Automáticos: Cada mes, la tarifa se deduce automáticamente. Asegúrate de tener fondos suficientes en las fechas de pago.
3. Notificaciones: Si un pago falla, recibirás un recordatorio para recargar tu billetera en 10 días. La falta de pago reduce tu puntaje de confianza.
4. Puntuación y Consecuencias: Los pagos puntuales mejoran tu puntaje de confianza; el incumplimiento reduce el puntaje, afectando el acceso futuro a BNPL.`,
        },
      ];

  return (
    <section
      ref={sectionRef}
      id="faq-section"
      className="py-12 bg-cover bg-center text-black  flex items-end sm:mt-96 md:mt-0"
      // style={{
      //   backgroundImage:
      //     "url('images/Background_buy_now_Payer_later_Flexfi.webp')",
      // }}
    >
      <div className="container mx-auto px-4 md:px-32">
        <h2
          className={`font-display text-2xl md:text-6xl font-extrabold mb-4 ${
            isVisible
              ? "motion-preset-slide-right motion-delay-[400ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          FAQ
        </h2>
        <div
          className={`space-y-4 ${
            isVisible
              ? "motion-preset-slide-right motion-delay-[500ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          {(isShopper ? faqShoppers : faqs).map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold font-display">
                  {faq.question}
                </h3>
                <span className="text-5xl w-9 h-9 flex items-center justify-center">
                  {open === index ? "-" : "+"}
                </span>
              </div>
              {open === index && (
                <p className="mt-4  text-base sm:text-xl">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
