import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import MainPage from "../MainPage/MainPage";
import ArticlePage from "../ArticlePage/ArticlePage";
import { PreloaderContext } from "../../context/PreloaderContext";
import { connect } from "react-redux";
import { getNewsList, clearNews } from "../../redux/slices/newsSlice";
import {
  getCommentsList,
  clearComments,
} from "../../redux/slices/commentsSlice";
import { api } from "../../utils/api";

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

  function handleArticleClick(dataArticle) {
    if (dataArticle.kids) {
      getCommentsList(dataArticle.kids);
    }
    setCurrentNew(dataArticle);
  }

  function handleChildCommentsButtonClick(dataComment) {
    getCommentsList(dataComment.kids);
  }

  function handleRefreshComments(dataArticle) {
    clearComments();
    api
      .getItem(dataArticle.id)
      .then((article) => getCommentsList(article.kids));
  }

  function handleRefreshNews() {
    clearNews();
    getNewsList();
  }

  React.useEffect(() => {
    getNewsList();
  }, []);

  return (
    <PreloaderContext.Provider value={isOpenPreloader}>
      <Header />
      <Switch>
        <Route exact path="/">
          {news.length > 1 ? (
            <MainPage
              news={news}
              refreshNewsList={handleRefreshNews}
              onArticleClick={handleArticleClick}
            />
          ) : (
            <Preloader isVisible={true} />
          )}
        </Route>
        <Route path="/new">
          <ArticlePage
            article={currentNew}
            comments={comments}
            clearComments={clearComments}
            onChildCommentsClick={handleChildCommentsButtonClick}
            refreshComments={handleRefreshComments}
          />
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
