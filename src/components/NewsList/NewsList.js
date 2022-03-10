import React from "react";
import { Link } from "react-router-dom";
import "./NewsList.css";

function NewsList({ news }) {
  function timeConverter(unixTime) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const data = new Date(unixTime * 1000);
    const day = data.getDate();
    const month = months[data.getMonth()];
    const year = data.getFullYear();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    return day + ' ' + month + ' ' + year + ' ' + hours + ":" + minutes + ":" + seconds;
  }
  
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
                <p className="new__caption">{`${item?.score || 0} point${item?.score > 1 ? 's' : ''} by ${
                  item?.by || ""
                } ${timeConverter(item.time) || ""}`}</p>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default NewsList;
