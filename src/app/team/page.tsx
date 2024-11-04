"use client";

import React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

const Team = () => {
  const { isEnglish } = useLanguageStore();

  return (
    <div className="relative bg-black h-auto flex flex-col items-start justify-between px-4 md:px-12 lg:px-32 mb-20">
      <img src="/images/Team-BNPL-FlexFi.webp" alt="brain image" />
      <div className="relative bg-black h-3/5 flex flex-col items-start justify-between">
        <h2 className="font-display mt-20 mb-10 text-6xl">
          {isEnglish ? "Team" : "Equipo"}
        </h2>
        <p className="font-display mb-10">
          {isEnglish
            ? "“A new way to approach payments, free from the traditional constraints of the banking system.”"
            : "“Una nueva forma de abordar los pagos, libre de las restricciones tradicionales del sistema bancario.”"}
        </p>
        <div className="flex flex-col gap-6">
          <p>
            {isEnglish
              ? "We are driven by a simple vision: to make cryptocurrencies accessible to everyone. We believe that blockchain technology can improve everyday life by enabling more flexible, secure, and affordable transactions."
              : "Nos impulsa una visión simple: hacer que las criptomonedas sean accesibles para todos. Creemos que la tecnología blockchain puede mejorar la vida cotidiana al permitir transacciones más flexibles, seguras y asequibles."}
          </p>
          <p>
            {isEnglish
              ? "Our team is made up of technology and innovation enthusiasts, all united by the same mission: to offer consumers and merchants a new way to approach payments, free from the traditional constraints of the banking system."
              : "Nuestro equipo está compuesto por entusiastas de la tecnología y la innovación, todos unidos por la misma misión: ofrecer a los consumidores y comerciantes una nueva forma de abordar los pagos, libre de las restricciones tradicionales del sistema bancario."}
          </p>
          <p>
            {isEnglish
              ? "Together, we push boundaries to provide you with an intuitive, transparent platform that meets the needs of today and tomorrow."
              : "Juntos, empujamos los límites para brindarte una plataforma intuitiva y transparente que satisfaga las necesidades de hoy y mañana."}
          </p>
        </div>
      </div>
      <img
        className="sm:size-3/5 md:size-3/4 mx-auto"
        src="/images/Team-FlexFi.webp"
        alt="team"
      />
    </div>
  );
};

export default Team;
