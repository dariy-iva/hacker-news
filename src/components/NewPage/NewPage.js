import React from "react";
import { Link } from "react-router-dom";
import "./NewPage.css";
import Article from "../Article/Article";
import CommentsList from "../CommentsList/CommentsList";

function NewPage({ article, comments, commentsIsOpen, onCommentsButtonClick }) {
  return (
    <section className="new-page">
      <Article
        article={article}
        isMainPage={false}
        commentsIsOpen={commentsIsOpen}
        onCommentsButtonClick={onCommentsButtonClick}
      />
      {comments && commentsIsOpen && <CommentsList comments={comments} />}
    </section>
  );
}

export default NewPage;