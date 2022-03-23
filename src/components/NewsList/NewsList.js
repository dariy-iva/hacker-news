import React from "react";
import "./NewsList.css";
import Article from "../Article/Article";
import RefreshButton from "../RefreshButton/RefreshButton"

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
      <RefreshButton onRefreshButtonClick={onRefreshButtonClick} />
    </section>
  );
}

export default NewsList;
