import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const initialState = [];

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews(state, action) {
      console.log("setNews");
      return [action.payload, ...state];
    },
  },
});

const getNew = (newId) => {
  console.log(newId);
  api
    .getItem(newId)
    .then((item) => {
      setNews(item);
    })
    .catch((err) => console.log(err));
};

export const getNewsList = () => {

    api
    .getNewsId()
    .then((arrId) => {
      for (let i = 0; i < 100; i++) {
        getNew(arrId[i]);
      }
    })
    .catch((err) => console.log(err));
  
};

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
