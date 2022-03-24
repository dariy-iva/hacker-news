import React from "react";
import "./RefreshButton.css";

function RefreshButton({ content, onRefreshButtonClick }) {
  return (
    <button
      type="button"
      className="refresh-button link-hover"
      onClick={onRefreshButtonClick}
      title={`Refresh ${content}`}
    >
      <div className="refresh-button__bcg" />
    </button>
  );
}

export default RefreshButton;
