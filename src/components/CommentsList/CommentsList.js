import React from "react";
import { Link } from "react-router-dom";
import "./CommentsList.css";
import Comment from "../Comment/Comment";

function CommentsList({
  article,
  comments,
  onChildCommentsClick,
  isChildCommentsList,
}) {
  return (
    <ul className="comments">
      {comments.map((item) => {
        if (article.kids.includes(item.id) || isChildCommentsList) {
          return (
            <li key={item.id} className="comments__item">
              <Comment
                comments={comments}
                comment={item}
                onChildCommentsClick={onChildCommentsClick}
                article={article}
              />
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}

export default CommentsList;
