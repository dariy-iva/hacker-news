import React from "react";
import "./RefreshButton.css";

function RefreshButton({ content, onRefreshButtonClick, isLoad }) {
  const buttonClass = `refresh-button link-hover ${!isLoad ? "refresh-button_loading" : ""}`
  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onRefreshButtonClick}
      title={`Refresh ${content}`}
    >
      <div className="refresh-button__bcg" />
    </button>
  );
}

export default RefreshButton;
