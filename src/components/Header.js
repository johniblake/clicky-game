import React, { useEffect } from "react";
import "../assets/styles/Header.css";

export default function Header({ score, highest, message }) {
  var keyframes = [
    {
      fontVariationSettings: `"wght" 100`
    },
    {
      fontVariationSettings: `"wght" 900`
    },
    {
      fontVariationSettings: `"wght" 100`
    }
  ];

  useEffect(() => {
    let node = document.querySelector("#message");
    node.animate(keyframes, 300);
  });

  return (
    <div className="header">
      <div className="header-items">
        <a
          href="https://github.com/johniblake/clicky-game"
          target="_blank"
          className="title"
        >
          <div>About</div>
        </a>
        <div id="message" className="message">
          {message}
        </div>
        <div className="score-container">
          Score: {score} | Highest: {highest}
        </div>
      </div>
    </div>
  );
}
