import React from "react";
import { Link } from "react-router-dom";
import "./CommentsList.css";
import { convertDate } from "../../utils/convertDate";

function CommentsList({ comments }) {
  const [commentsIsOpen, setCommentsIsOpen] = React.useState(false);

  const commentsButtonClass = `article__caption article__caption_content_comments article__button link-hover ${
    commentsIsOpen
      ? "article__button_state-comment_open"
      : "article__button_state-comment_close"
  }`;

  function handleButtonCommentsClick() {
    setCommentsIsOpen(!commentsIsOpen);
  }

  return (
    <ul className="comments">
      {comments.map((item) => {
        return (
          <li key={item.id} className="comment">
            <p className="comment__info">
              <span className="comment__caption">{`${item.by || ""} ${
                convertDate(item.time) || ""
              }`}</span>
              {item.kids ? (
                <button
                  type="button"
                  className={commentsButtonClass}
                  onClick={handleButtonCommentsClick}
                >
                  {`${item.kids.length} ${
                    item.kids.length > 1 ? "comments" : "comment"
                  }`}
                </button>
              ) : (
                <span className="comment__caption comment__caption_content_comments">
                  0 comments
                </span>
              )}
            </p>
            <p className="comment__text">{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentsList;
