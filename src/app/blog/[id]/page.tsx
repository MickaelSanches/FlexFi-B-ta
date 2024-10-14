"use client";

import { useParams } from "next/navigation";
import { articlesBlog } from "@/data/articlesBlog";
import React from "react";

const ArticleDetail = () => {
  const { id } = useParams(); // Récupération de l'id depuis l'URL

  // Trouver l'article correspondant à l'id
  const article = articlesBlog.find((art) => art.id === id);

  if (!article) {
    return <p className="text-white">Article not found</p>;
  }

  return (
    <div className="relative bg-black h-auto flex flex-col items-start justify-between px-4 md:px-12 lg:px-32 mb-20">
      {/* Image principale */}
      <img
        src={article.mainUrlImage}
        alt={article.title}
        className="w-full h-auto rounded-lg mb-8"
      />
      <h1 className="md:text-4xl text-3xl font-display mb-6 text-white">
        {article.title}
      </h1>

      {/* Introduction */}
      <p
        className="font-sans text-lg text-white leading-relaxed mb-10"
        dangerouslySetInnerHTML={{ __html: article.introduction }}
      ></p>

      {/* Affichage des sections de contenu avec images */}
      {article.contentSections.map((section, index) => (
        <section
          key={index}
          className={`mb-8 ${
            index === 0
              ? "flex flex-col xl:flex-row justify-between items-start"
              : ""
          }`}
        >
          <div className={`${index === 0 ? "lg:w-2/3 mb-10" : "mb-10"}`}>
            <h2 className="text-2xl font-display font-semibold mb-4 text-white">
              {section.title}
            </h2>

            {/* Contenu HTML rendu */}
            <p
              className={`font-sans text-lg leading-relaxed text-white ${
                index === 0 ? "w-10/12 text-justify" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: section.content }}
            ></p>
          </div>

          {/* Affichage de l'image si elle est présente dans la section */}
          {section.imageUrl && (
            <div
              className={`${
                index === 0
                  ? "lg:size-3/6 lg:ml-6 mb-10"
                  : "w-full flex justify-center mb-10"
              }`}
            >
              <img
                src={section.imageUrl}
                alt={section.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </section>
      ))}

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-display font-semibold mb-4 text-white">
          {article.id == "2"
            ? "Conclusion: The Future of BNPL Transactions with Smart Contracts"
            : "Conclusion"}
        </h2>
        <p
          className="font-sans text-lg leading-relaxed text-white"
          dangerouslySetInnerHTML={{ __html: article.conclusion }}
        ></p>
      </section>
    </div>
  );
};

export default ArticleDetail;
