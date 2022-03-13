import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { api } from "../../utils/api";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NewsList from "../NewsList/NewsList";
import { PreloaderContext } from "../../context/PreloaderContext";
import { connect } from "react-redux";
import { getNewsList } from "../../redux/slices/newsSlice";


function App({ news, getNewsList }) {
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const mainPage = news.length === 100 ? <NewsList news={news} /> : <Preloader isVisible={true}/>

//   function getNew(newId) {
//     api
//       .getItem(newId)
//       .then((item) => {
//         setNews(item);
//       })
//       .catch((err) => console.log(err));
// }


  React.useEffect(() => {
    getNewsList();
      // api
      //   .getNewsId()
      //   .then((arrId) => {
      //     for (let i = 0; i < 100; i++) {
      //       getNew(arrId[i]);
      //     }
      //   })
      //   .catch((err) => console.log(err));
    
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
  { getNewsList }
)(App);
