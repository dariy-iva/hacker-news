import React from "react";
import { Link } from "react-router-dom";
import "./CommentsList.css";
import Comment from "../Comment/Comment";

function CommentsList({ comments, onChildCommentsClick }) {
  return (
    <ul className="comments">
      {comments.map((item) => {
        return (
          <li key={item.id} className="comments__item">
            <Comment comments={comments} comment={item} onChildCommentsClick={onChildCommentsClick}/>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentsList;
