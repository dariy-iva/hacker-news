import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const getNew = createAsyncThunk("news/getNew", (newId) => {
  return api
    .getItem(newId)
    .then(item => item)
    .catch((err) => console.log(err));
});

export const getNewsList = () => (dispatch) => {
  return api
    .getNewsId()
    .then((arrId) => {
      for (let i = 0; i < 100; i++) {
        dispatch(getNew(arrId[i]));
      }
    })
    .catch((err) => console.log(err));
};

const initialState = {
  news: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews(state) {
      state.news = [];
    }
    // setNews(state, action) {
    //   return [...state, action.payload];
    // },
  },
  extraReducers: {
    [getNew.fulfilled]: (state, action) => {
      state.news = [...state.news, action.payload];
    },
  },
});



export const { clearNews } = newsSlice.actions;
export default newsSlice.reducer;
