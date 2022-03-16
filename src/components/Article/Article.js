import React from "react";
import { Link } from "react-router-dom";
import "./Article.css";
import { convertDate } from "../../utils/convertDate";

function Article({ article, onArticleClick, isMainPage }) {
  const { id, title, text, url, score, by, time, kids } = article;

  const articleText = text || 'Follow the link in the title to read the full text';

  const commentsNum = kids ? kids.length : 0;
  const commentsText = commentsNum > 1 ? "comments" : "comment";

  console.log(article);

  function handleArticleClick() {
    onArticleClick(article);
  }

  return (
    <article className="article">
      {isMainPage ? (
        <Link
          className="article__link link-hover"
          to={`/new/${id}`}
          onClick={handleArticleClick}
        >
          {title || ""}
        </Link>
      ) : (
        <a className="article__link link-hover" href={url} target="blank">
          {title || ""}
        </a>
      )}

      {!isMainPage && <p className="article__text">{articleText}</p>}
      <p className="article__info">
        {isMainPage && (
          <span className="article__caption">{`${score || 0} point${
            score > 1 ? "s" : ""
          }`}</span>
        )}
        <span className="article__caption">{`by ${by || ""} ${
          convertDate(time) || ""
        }`}</span>
        {!isMainPage && (
          <button type="button" className="article__caption article__button link-hover">
            {commentsNum + ' ' + commentsText}
          </button>
        )}
      </p>
    </article>
  );
}

export default Article;
