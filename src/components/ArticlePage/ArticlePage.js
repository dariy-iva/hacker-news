import React from "react";
import { Link } from "react-router-dom";
import "./ArticlePage.css";
import Article from "../Article/Article";
import CommentsList from "../CommentsList/CommentsList";

function ArticlePage({
  article,
  comments,
  commentsIsOpen,
  onCommentsButtonClick,
  clearComments,
  onChildCommentsClick
}) {
  React.useEffect(() => {
    return () => {
      clearComments();
    };
  }, []);

  return (
    <section className="new-page">
      <Article
        article={article}
        isMainPage={false}
        commentsIsOpen={commentsIsOpen}
        onCommentsButtonClick={onCommentsButtonClick}
      />
      {comments && commentsIsOpen && <CommentsList article={article} comments={comments} onChildCommentsClick={onChildCommentsClick} isChildCommentsList={false} />}
    </section>
  );
}

export default ArticlePage;
