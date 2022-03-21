import React from "react";
import "./Comment.css";
import { convertDate } from "../../utils/convertDate";

function Comment({ comment }) {
  const { id, by, time, kids, text } = comment;
  const [commentsIsOpen, setCommentsIsOpen] = React.useState(false);

  const commentsButtonClass = `comment__caption comment__caption_content_comments comment__button link-hover ${
    commentsIsOpen
      ? "comment__button_state-comment_open"
      : "comment__button_state-comment_close"
  }`;

  function handleButtonCommentsClick() {
    setCommentsIsOpen(!commentsIsOpen);
  }

  return (
    <li key={id} className="comment">
      <p className="comment__info">
        <span className="comment__caption">{`${by || ""} ${
          convertDate(time) || ""
        }`}</span>
        {kids ? (
          <button
            type="button"
            className={commentsButtonClass}
            onClick={handleButtonCommentsClick}
          >
            {`${kids.length} ${kids.length > 1 ? "comments" : "comment"}`}
          </button>
        ) : (
          <span className="comment__caption comment__caption_content_comments">
            no comments
          </span>
        )}
      </p>
      <p className="comment__text">{text}</p>
    </li>
  );
}

export default Comment;
