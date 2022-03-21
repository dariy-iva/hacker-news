import React from "react";
import { Link } from "react-router-dom";
import "./CommentsList.css";
import Comment from "../Comment/Comment"

function CommentsList({ comments }) {

  return (
    <ul className="comments">
      {comments.map((item) => {
        return (
          <Comment comment={item} />
        );
      })}
    </ul>
  );
}

export default CommentsList;
