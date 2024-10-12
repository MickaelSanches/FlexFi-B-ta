import ArticleComp from "@/components/Article";
import { articlesBlog } from "@/data/articlesBlog";
import React from "react";

const Blog = () => {
  const articles = articlesBlog;

  return (
    <>
      <img src="/images/Blog-FlexFi.webp" alt="brain image" />
      <h2 className="text-black font-display absolute right-52 text-9xl bottom-60">
        Blog
      </h2>
      <div className="relative bg-black h-3/5 flex flex-col items-start justify-between px-4 md:px-12 lg:px-32 mb-20">
        <h3 className="font-display mt-20 mb-20 text-4xl">All posts</h3>
        <div className="w-full flex ">
          {articles.map((item) => {
            return <ArticleComp key={item.title} article={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
