import React from "react";
import "./Comment.css";
import { convertDate } from "../../utils/convertDate";
import CommentsList from "../CommentsList/CommentsList"

function Comment({ comments, comment, onChildCommentsClick }) {
  const { by, time, kids, text } = comment;
  const [childCommentsIsOpen, setChildCommentsIsOpen] = React.useState(false);
  const [childComments, setChildComments] = React.useState([]);

  const commentsButtonClass = `comment__caption comment__caption_content_comments comment__button link-hover ${
    childCommentsIsOpen
      ? "comment__button_state-comment_open"
      : "comment__button_state-comment_close"
  }`;

  function getChildComments() {

    comments.forEach(item => {
      if (kids.includes(item.id) && !childComments.includes(item)) {
        setChildComments([item, ...childComments]);
      }
    });
  }

  function handleButtonCommentsClick() {
    onChildCommentsClick(comment);
    // getChildComments();
    // console.log(childComments)
    setChildCommentsIsOpen(!childCommentsIsOpen);
  }

  React.useEffect(() => {
    if (kids) {
      getChildComments();
    }
    
  }, [comments])

  return (
    <>
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
      {childCommentsIsOpen && <CommentsList comments={childComments} onChildCommentsClick={onChildCommentsClick}/>}
    </>
  );
}

export default Comment;
