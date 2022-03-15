import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NewsList from "../NewsList/NewsList";
import { PreloaderContext } from "../../context/PreloaderContext";
import { connect } from "react-redux";
import { getNewsList, clearNews } from "../../redux/slices/newsSlice";

function App({ news, getNewsList, clearNews }) {
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const mainPage =
    news.length > 1 ? (
      <NewsList news={news} onRefreshButtonClick={refreshNewsList} />
    ) : (
      <Preloader isVisible={true} />
    );

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
        <Route path="/new"></Route>
      </Switch>
      <Preloader isVisible={isOpenPreloader} />
    </PreloaderContext.Provider>
  );
}

export default connect(
  (state) => ({
    news: state.news.news,
  }),
  { getNewsList, clearNews }
)(App);
