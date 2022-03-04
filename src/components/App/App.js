import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { api } from "../../utils/api";
import Header from "../Header/Header";
import NewsList from "../NewsList/NewsList";

function App() {
  const [idList, setIdList] = React.useState([]);
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    const arr = []
    api
      .getNewsId()
      .then((arrId) => {
        for (let i = 0; i < 100; i++) {
          api
          .getItem(arrId[i])
          .then((item) => {
            arr.push(item);
          })
          .catch((err) => console.log(err));
        }
        setNews(arr);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <NewsList news={news} />
        </Route>
        <Route path="/new"></Route>
      </Switch>
    </>
  );
}

export default App;
