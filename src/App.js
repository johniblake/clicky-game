import React, { useState } from "react";
import Game from "./components/Game";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [score, setScore] = useState(0);
  const [highest, setHighest] = useState(0);
  const [message, setMessage] = useState("Click a tile to begin!");

  const onUpdateScore = playerLost => {
    let newHighest = highest + 1;

    if (playerLost) return resetGame();

    setScore(score + 1);
    setHighest(highest < score + 1 ? newHighest : highest);
    setMessage("Well done!");
  };

  const resetGame = () => {
    setScore(0);
    setMessage("Oops! You already clicked that tile!");
  };

  return (
    <div className="App">
      <Header score={score} highest={highest} message={message} />
      <Game updateScore={onUpdateScore} />
    </div>
  );
}
