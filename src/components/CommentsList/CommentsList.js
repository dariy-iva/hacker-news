import React from "react";
import "./CommentsList.css";
import Comment from "../Comment/Comment";

function CommentsList({ article, comments, onChildCommentsClick }) {
  return (
    <ul className="comments">
      {comments.map((item) => {
        if (article.kids.includes(item.id)) {
          return (
            <li key={item.id} className="comments__item">
              <Comment
                comments={comments}
                comment={item}
                onChildCommentsClick={onChildCommentsClick}
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
