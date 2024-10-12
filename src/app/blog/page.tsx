import Link from "next/link";
import ArticleComp from "@/components/Article";
import { articlesBlog } from "@/data/articlesBlog";
import React from "react";

const Blog = () => {
  const articles = articlesBlog;

  return (
    <>
      {/* Image principale en haut */}
      <div className="relative bg-black h-auto flex flex-col items-start justify-between px-4 md:px-12 lg:px-32 mb-5 ">
        <img
          src="/images/Blog-FlexFi.webp"
          alt="brain image"
          className="w-full"
        />
        {/* Titre "Blog" positionné relativement à l'image */}
        <h2 className="text-black font-display absolute right-10 lg:right-52 text-6xl lg:text-9xl bottom-40 lg:bottom-60">
          Blog
        </h2>
      </div>

      {/* Contenu du blog */}
      <div className="relative bg-black h-auto flex flex-col items-start justify-between px-4 md:px-12 lg:px-32 mb-20">
        <h3 className="font-display mt-20 mb-10 text-3xl lg:text-4xl">
          All posts
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((item) => (
            <Link
              href={`/blog/${item.id}`} // Utilisation de l'id dans l'URL
              key={item.id}
              passHref
            >
              <ArticleComp article={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
