import React from "react";
import "./MainPage.css";
import NewsList from "../NewsList/NewsList";
import RefreshButton from "../RefreshButton/RefreshButton";

function MainPage({ news, refreshNewsList, onArticleClick }) {

  React.useEffect(() => {
    const refreshInterval = setInterval(() => {
      refreshNewsList();
      console.log(1)
    }, 60000);
    return () => {
      clearInterval(refreshInterval);
    }
  }, []);

  return (
    <section className="news">
      <NewsList news={news} onArticleClick={onArticleClick} />
      <RefreshButton onRefreshButtonClick={refreshNewsList} content="news" />
    </section>
  );
}

export default MainPage;
