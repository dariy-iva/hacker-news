import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import { api } from "../../utils/api";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NewsList from "../NewsList/NewsList";
import { PreloaderContext } from "../../context/PreloaderContext";
import { connect } from "react-redux";
import { getNewsList, setNews } from "../../redux/slices/newsSlice";

function App({ news, setNews }) {
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const mainPage = news.length === 100 ? <NewsList news={news} /> : <Preloader isVisible={true}/>

  React.useEffect(() => {
    getNewsList();
  }, []);
  console.log(news);

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
    news: state.news,
  }),
  { setNews }
)(App);
