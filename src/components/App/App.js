import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NewsList from "../NewsList/NewsList";
import Article from "../Article/Article";
import { PreloaderContext } from "../../context/PreloaderContext";
import { connect } from "react-redux";
import { getNewsList, clearNews } from "../../redux/slices/newsSlice";
import { getCommentsList, clearComments } from "../../redux/slices/commentsSlice";

function App({
  news,
  getNewsList,
  clearNews,
  comments,
  getCommentsList,
  clearComments,
}) {
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [currentNew, setCurrentNew] = React.useState(null);
  const mainPage =
    news.length > 1 ? (
      <NewsList
        news={news}
        onRefreshButtonClick={refreshNewsList}
        onArticleClick={handleArticleClick}
      />
    ) : (
      <Preloader isVisible={true} />
    );

  function handleArticleClick(dataArticle) {
    setCurrentNew(dataArticle);
  }

  function refreshNewsList() {
    clearNews();
    getNewsList();
  }

  React.useEffect(() => {
    getNewsList();
    setInterval(() => {
      refreshNewsList();
    }, 60000);
  }, []);

  return (
    <PreloaderContext.Provider value={isOpenPreloader}>
      <Header />
      <Switch>
        <Route exact path="/">
          {mainPage}
        </Route>
        <Route path="/new">
          <Article article={currentNew} />
        </Route>
      </Switch>
      <Preloader isVisible={isOpenPreloader} />
    </PreloaderContext.Provider>
  );
}

export default connect(
  (state) => ({
    news: state.news.news,
    comments: state.comments.comments,
  }),
  { getNewsList, clearNews, getCommentsList, clearComments }
)(App);
