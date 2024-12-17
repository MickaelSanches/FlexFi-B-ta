"use client";

import React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Team = () => {
  const { isEnglish } = useLanguageStore();

  return (
    <div className="bg-gradient-to-br from-[#0C1735] to-white pb-0">
      <Header />
      <div className="text-black relative bg-white h-auto flex flex-col items-start justify-between px-4 md:px-12 lg:px-32 pb-20">
        <img
          className="w-full h-auto object-cover"
          src="/images/Team-BNPL-FlexFi.webp"
          alt="brain image"
        />
        <div className="relative bg-white h-auto flex flex-col items-start justify-between pb-20">
          <h2 className="font-display mt-20 mb-10 text-4xl sm:text-5xl md:text-6xl">
            {isEnglish ? "Team" : "Equipo"}
          </h2>
          <p className="font-display mb-10 text-base sm:text-lg md:text-xl">
            {isEnglish
              ? "“A new way to approach payments, free from the traditional constraints of the banking system.”"
              : "“Una nueva forma de abordar los pagos, libre de las restricciones tradicionales del sistema bancario.”"}
          </p>
          <div className="flex flex-col gap-6 font-sans">
            <p className="text-base sm:text-lg md:text-xl">
              {isEnglish
                ? "We are driven by a simple vision: to make cryptocurrencies accessible to everyone. We believe that blockchain technology can improve everyday life by enabling more flexible, secure, and affordable transactions."
                : "Nos impulsa una visión simple: hacer que las criptomonedas sean accesibles para todos. Creemos que la tecnología blockchain puede mejorar la vida cotidiana al permitir transacciones más flexibles, seguras y asequibles."}
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              {isEnglish
                ? "Our team is made up of technology and innovation enthusiasts, all united by the same mission: to offer consumers and merchants a new way to approach payments, free from the traditional constraints of the banking system."
                : "Nuestro equipo está compuesto por entusiastas de la tecnología y la innovación, todos unidos por la misma misión: ofrecer a los consumidores y comerciantes una nueva forma de abordar los pagos, libre de las restricciones tradicionales del sistema bancario."}
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              {isEnglish
                ? "Together, we push boundaries to provide you with an intuitive, transparent platform that meets the needs of today and tomorrow."
                : "Juntos, empujamos los límites para brindarte una plataforma intuitiva y transparente que satisfaga las necesidades de hoy y mañana."}
            </p>
          </div>
        </div>
        <div className="space-y-12">
          <div
            className="flex flex-col sm:flex-row items-center justify-between mb-20 space-y-6 sm:space-y-0 bg-cover"
            style={{
              backgroundImage:
                "url('images/Background_buy_now_Payer_later_Flexfi.webp')",
            }}
          >
            <img
              className="sm:w-40 sm:h-40 md:size-2/6 mx-auto rounded-2xl object-cover shadow-2xl"
              src="/images/micka-photo.webp"
              alt="Mickael"
            />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-display">
                {isEnglish ? "Mickael Co-founder" : "Mickael Cofundador"}
              </h3>
              <p className="text-base sm:text-lg md:text-xl px-6 mt-5 font-sans w-2/3">
                {isEnglish
                  ? `Mickael, co-founder of FlexFi, has more than 10 years of
                experience in management and sales, particularly in the
                furniture sector. With a degree in web development and a
                specialization in Web3, he has observed the impact of BNPL in
                retail settings. At FlexFi, he draws on both his commercial and
                technical expertise to deliver an innovative, accessible, and
                advantageous solution for merchants and their customers.`
                  : ``}
              </p>
            </div>
          </div>
          <div
            className="flex flex-col-reverse sm:flex-row items-center justify-between bg-cover"
            style={{
              backgroundImage:
                "url('images/Background_buy_now_Payer_later_Flexfi.webp')",
            }}
          >
            <div className="flex flex-col justify-center items-center mt-6">
              <h3 className="text-3xl font-display">
                {isEnglish ? "Thomas Co-founder" : "Thomas Cofundador"}
              </h3>
              <p className="text-base sm:text-lg md:text-xl px-6 mt-5 font-sans w-2/3">
                {isEnglish
                  ? `Creative, bold, and driven by a thirst for innovation, my
                journey is a true ode to the freedom of entrepreneurship. After
                years of shaping projects with my own hands, I found in the
                world of cryptocurrencies, since 2020, a place where vision and
                impact meet. Every step, every challenge, has taught me to think
                big, dream boldly, and build with conviction. What drives me:
                &quot;transforming the impossible into the possible, and forging
                paths where others see only walls.&quot;`
                  : `Creativo, audaz y movido por una sed de innovación, mi trayectoria
                es una verdadera oda a la libertad del emprendimiento. Después de
                años dando forma a proyectos con mis propias manos, encontré en el
                mundo de las criptomonedas, desde 2020, un lugar donde la visión y
                el impacto convergen. Cada paso, cada desafío, me ha enseñado a
                pensar en grande, soñar con audacia y construir con convicción.
                Lo que me impulsa: "transformar lo imposible en posible y forjar
                caminos donde otros solo ven muros.`}
              </p>
            </div>
            <img
              className="sm:w-40 sm:h-40 md:size-2/6 mx-auto -scale-x-100 rounded-2xl object-cover shadow-2xl"
              src="/images/thomas-photo.webp"
              alt="Thomas"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
