import React from "react";
import { ArticlePropList } from "../utils/types";

function ListArticle(prop: ArticlePropList) {
  const article = prop.article;

  return (
    <div className="flex space-x-5 h-36">
      <img className="h-100" src={article.image?.src} alt={article.image?.alt}/>
      <div className="flex flex-grow justify-between flex-col">
        <h1 className="text-4xl text-grayishBlue font-bold">{`${prop.index + 1 < 10 ? 0 : ""}${prop.index + 1}`}</h1>
        <h2 className="font-extrabold hover:text-softRed cursor-pointer text-darkBlue text-xl">{article.title}</h2>
        <p className="text-grayishBlue-900">{article.content}</p>
      </div>
    </div>
  );
}

export default ListArticle;
