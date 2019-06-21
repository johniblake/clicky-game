import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import "../assets/styles/Game.css";
let { tiles } = require("../assets/tiles");

export default function Game({ updateScore }) {
  //create state and use it
  const [reset, setReset] = useState(false);

  // The useEffect hook will run every time 'reset' changes from one render to the next.
  // It would normally run every render, but because we supply the [reset] dependency array in the second argument to useEffect(),
  // it will only run when 'reset' changes.

  useEffect(() => {
    //if reset has been set to true, animate the message to red, and then set reset to false again
    if (reset) {
      document
        .querySelector("#message")
        .animate([{ color: "white" }, { color: "red" }], 300);
    }
    // setReset(false) will cause this component and its children to rerender only if reset is true
    setReset(false);
  }, [reset]);

  // update the score in the Game component whenever a Tile is clicked.
  // detect whether or not the Tile was previously clicked and reset all the Tiles if it was
  // also inform the Game component whether or not it should reset the score
  const handleClick = wasClicked => {
    if (wasClicked) setReset(true);
    updateScore(wasClicked);
  };

  // This shuffle algorithm is the O(n) variation of the Fisher-Yates shuffle introduced by Richard Durstenfeld
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
  const shuffleTiles = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //shuffle the tiles
  tiles = shuffleTiles(tiles);

  return (
    <div>
      <main className="container">
        {tiles.map(tile => {
          return (
            <Tile
              id={tile.id}
              key={tile.id}
              image={tile.image}
              handleClick={handleClick}
              reset={reset}
            />
          );
        })}
      </main>
    </div>
  );
}
