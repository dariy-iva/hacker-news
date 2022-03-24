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

function App({
  news,
  getNewsList,
  clearNews,
  comments,
  getCommentsList,
  clearComments,
}) {
  const [commentsIsOpen, setCommentsIsOpen] = React.useState(true);
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [currentNew, setCurrentNew] = React.useState(null);

  function handleArticleClick(dataArticle) {
    if (dataArticle.kids) {
      getCommentsList(dataArticle.kids);
    }
    setCurrentNew(dataArticle);
  }

  function handleCommentsButtonClick() {
    setCommentsIsOpen(!commentsIsOpen);
  }

  function handleChildCommentsButtonClick(dataComment) {
    getCommentsList(dataComment.kids);
  }

  function handleRefreshComments(dataComment) {
    clearComments();
    getCommentsList(dataComment.kids);
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
            commentsIsOpen={commentsIsOpen}
            onCommentsButtonClick={handleCommentsButtonClick}
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
