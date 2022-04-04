import React from "react";
import "./NewsList.css";
import Article from "../Article/Article";

function NewsList({ news, onArticleClick }) {
// console.log(news)
  return (
    <ol className="news__list">
      {news.map((item) => {
        return (
          <li key={item.id || ""}>
            <Article
              article={item}
              onArticleClick={onArticleClick}
              isMainPage={true}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default NewsList;
