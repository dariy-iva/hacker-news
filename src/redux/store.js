import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./slices/commentsSlice";
import newsSlice from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    comments: commentsSlice,
  },
});
