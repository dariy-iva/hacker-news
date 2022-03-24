import React from "react";
import { Link } from "react-router-dom";
import "./ArticlePage.css";
import Article from "../Article/Article";
import CommentsList from "../CommentsList/CommentsList";
import RefreshButton from "../RefreshButton/RefreshButton";

function ArticlePage({
  article,
  comments,
  commentsIsOpen,
  onCommentsButtonClick,
  clearComments,
  onChildCommentsClick,
  refreshComments
}) {
  React.useEffect(() => {
    return () => {
      clearComments();
    };
  }, []);

  function handleRefreshComments() {
    refreshComments(article);
  }

  return (
    <section className="new-page">
      <Article
        article={article}
        isMainPage={false}
        commentsIsOpen={commentsIsOpen}
        onCommentsButtonClick={onCommentsButtonClick}
      />
      {comments && commentsIsOpen && (
        <CommentsList
          article={article}
          comments={comments}
          onChildCommentsClick={onChildCommentsClick}
          isChildCommentsList={false}
        />
      )}
      <RefreshButton onRefreshButtonClick={handleRefreshComments} content="comments" />
    </section>
  );
}

export default ArticlePage;
