import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const initialState = [];

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews(state, action) {
      return [...state, action.payload];
    },
  },
});

// export function getNew (newId) {
//   return dispatch => {

//   api
//     .getItem(newId)
//     .then((item) => {
//       console.log(newId);
//       dispatch(setNews(item));
//     })
//     .catch((err) => console.log(err));
// };
// }

// export const getNewsList = () => {
//   api
//     .getNewsId()
//     .then((arrId) => {
//       for (let i = 0; i < 100; i++) {
//         getNew(arrId[i]);
//       }
//     })
//     .catch((err) => console.log(err));
// };

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
