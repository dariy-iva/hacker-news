import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const getComment = createAsyncThunk("comments/getComments", (commentId) => {
  return api
    .getItem(commentId)
    .then((item) => item)
    .catch((err) => console.log(err));
});

export const getCommentsList = (arrIdComments) => (dispatch) => {
  for (let i = 0; i < arrIdComments.length; i++) {
    dispatch(getComment(arrIdComments[i]));
  }
};

const initialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComments(state) {
      state.comments = [];
    },
  },
  extraReducers: {
    [getComment.fulfilled]: (state, action) => {
      state.comments = [...state.comments, action.payload];
      state.comments.sort((a,b) =>  b.time - a.time);
    },
  },
});

export const { clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;
