import React from "react";

const Blog = () => {
  return (
    <>
      <img src="/images/Blog-FlexFi.webp" alt="brain image" />
      <h2 className="text-black font-display absolute right-52 text-9xl bottom-60">
        Blog
      </h2>
      <div className="relative bg-black h-3/5 flex flex-col items-start justify-between px-4 md:px-12 lg:px-32">
        <h3 className="font-display mt-20 mb-10 text-4xl">All posts</h3>
      </div>
    </>
  );
};

export default Blog;
