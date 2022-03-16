import React from "react";
import "./NewsList.css";
import Article from "../Article/Article";

function NewsList({ news, onRefreshButtonClick, onArticleClick }) {
  return (
    <section className="news">
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
      <button
        type="button"
        className="news__button-refresh link-hover"
        onClick={onRefreshButtonClick}
      >
        Refresh news
      </button>
    </section>
  );
}

export default NewsList;
