import React from "react";
import { Link } from "react-router-dom";
import "./NewsList.css";
import { convertDate } from "../../utils/convertDate";

function NewsList({ news, onRefreshButtonClick }) {
  return (
    <section className="news">
      <ol className="news__list">
        {news.map((item) => {
          return (
            <li key={item?.id || ""}>
              <article className="new">
                <Link className="new__link link-hover" to={`/new/${item}`}>
                  {item?.title || ""}
                </Link>
                <p className="new__caption">{`${item?.score || 0} point${
                  item?.score > 1 ? "s" : ""
                } by ${item?.by || ""} ${convertDate(item.time) || ""}`}</p>
              </article>
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
