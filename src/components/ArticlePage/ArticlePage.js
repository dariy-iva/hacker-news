import React from "react";
import "./ArticlePage.css";
import Article from "../Article/Article";
import CommentsList from "../CommentsList/CommentsList";
import RefreshButton from "../RefreshButton/RefreshButton";

function ArticlePage({
  article,
  comments,
  clearComments,
  onChildCommentsClick,
  refreshComments,
}) {
  const [commentsIsOpen, setCommentsIsOpen] = React.useState(true);
  const [commentsIsLoad, setCommentsIsLoad] = React.useState();

  function handleCommentsButtonClick() {
    setCommentsIsOpen(!commentsIsOpen);
  }

  function handleRefreshComments() {
    refreshComments(article);
  }

  React.useEffect(() => {
    if (!article.kids || article.kids.length <= comments.length) {
      setCommentsIsLoad(true);
    } else {
      setCommentsIsLoad(false);
    }
  }, [comments, article]);

  React.useEffect(() => {
    const refreshInterval = setInterval(() => {
      refreshComments(article);
    }, 60000);
    return () => {
      clearInterval(refreshInterval);
      clearComments();
    };
  }, []);

  return (
    <section className="new-page">
      <Article
        article={article}
        isMainPage={false}
        commentsIsOpen={commentsIsOpen}
        onCommentsButtonClick={handleCommentsButtonClick}
      />
      {comments && commentsIsOpen && commentsIsLoad && (
        <CommentsList
          article={article}
          comments={comments}
          onChildCommentsClick={onChildCommentsClick}
        />
      )}
      <RefreshButton
        onRefreshButtonClick={handleRefreshComments}
        content="comments"
        isLoad={commentsIsLoad}
      />
    </section>
  );
}

export default ArticlePage;
