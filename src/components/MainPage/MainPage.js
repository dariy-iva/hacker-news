import React from "react";
import "./MainPage.css";
import NewsList from "../NewsList/NewsList";
import RefreshButton from "../RefreshButton/RefreshButton";

function MainPage({ news, refreshNewsList, onArticleClick }) {
  const [newsIsLoad, setNewsIsLoad] = React.useState();

  React.useEffect(() => {
    news.length === 100 ? setNewsIsLoad(true) : setNewsIsLoad(false);
  }, [news]);

  React.useEffect(() => {
    const refreshInterval = setInterval(() => {
      refreshNewsList();
    }, 60000);
    return () => {
      clearInterval(refreshInterval);
    }
  }, []);

  return (
    <section className="news">
      <NewsList news={news} onArticleClick={onArticleClick} />
      <RefreshButton onRefreshButtonClick={refreshNewsList} content="news" isLoad={newsIsLoad} />
    </section>
  );
}

export default MainPage;
