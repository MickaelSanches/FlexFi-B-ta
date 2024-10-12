import { Article } from "@/@Types/article";

interface ArticleCompProps {
  article: Article;
}

const ArticleComp = ({ article }: ArticleCompProps) => {
  return (
    <div className="flex flex-col bg-black rounded-lg shadow-lg max-w-full md:max-w-md cursor-pointer mr-0 md:mr-10 mb-10">
      {/* Image section */}
      <img
        className="w-full rounded-lg mb-4"
        src={article.urlImageMini}
        alt="article image"
      />

      {/* FlexFi logo and date */}
      <div className="flex items-center mb-3">
        <img
          className="mr-3 w-6 h-6"
          src="/logo/flexicon.webp"
          alt="logo flexfi"
        />
        <p className="text-teal-400 text-xs">flex-fi.io / xx Month 2024</p>
      </div>

      {/* Article title */}
      <h3 className="font-display text-white text-2xl mb-2">{article.title}</h3>

      {/* Article summary */}
      <p className="font-sans text-white text-sm leading-relaxed">
        {article.resum}
      </p>
    </div>
  );
};

export default ArticleComp;
