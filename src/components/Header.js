import React from "react";

export default function Header({ score, highest, message }) {
  return (
    <div className="header">
      <div className="header-items">
        <div className="title">Clicky Game</div>
        <div className="message">{message}</div>
        <div className="score-container">
          Score: {score} | Highest: {highest}
        </div>
      </div>
    </div>
  );
}
