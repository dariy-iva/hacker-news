import React from "react";
import { Link } from "react-router-dom";
import "./NewsList.css";

function NewsList({ news }) {
  
  return (
    <section className="news">
      <ol className="news__list">
        {news.map((item) => {
          return (
            <li key={item?.id || ''}>
              <article className="new">
                <Link className="new__link" to={`/new/${item}`}>
                  <h2 className="new__title">{item?.title || ''}</h2>
                  <p className="new__score">{item?.score || 0}</p>
                  <p className="new__author">{item?.by || ''}</p>
                  <p className="new__date">{item?.time || ''}</p>
                </Link>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default NewsList;
