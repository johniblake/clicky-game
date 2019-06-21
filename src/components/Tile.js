import React, { useState, useEffect } from "react";
import "../assets/styles/Tile.css";

export default function Tile({ image, reset, handleClick }) {
  const [clicked, setClicked] = useState(false);

  const wasClicked = () => {
    clicked ? handleClick(true) : handleClick(false);
    setClicked(true);
  };

  useEffect(() => {
    if (reset) setClicked(false);
  }, [reset]);

  return (
    <div
      className="tile"
      onClick={wasClicked}
      style={{
        backgroundImage: `url(${image})`
      }}
    />
  );
}
