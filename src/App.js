import React, { Component } from "react";
import Game from "./components/Game";
import "./App.css";
import Header from "./components/Header";

export default class App extends Component {
  state = {
    score: 0,
    highest: 0,
    clicked: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false
    },
    message: "Click an image to begin!"
  };

  onUpdateScore = id => {
    console.log("ID: " + id);

    this.setState(prevState => {
      let newHighest = prevState.highest;
      if (prevState.clicked[id] === true) {
        return this.resetGame();
      }

      if (prevState.highest < prevState.score + 1) {
        newHighest = prevState.highest + 1;
      }

      prevState.clicked[id] = true;
      return {
        score: prevState.score + 1,
        highest: newHighest,
        clicked: prevState.clicked,
        message: "You Guessed Correctly!"
      };
    });
  };

  resetGame = () => {
    return {
      score: 0,
      clicked: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false
      },
      message: "You Guessed Incorrectly"
    };
  };

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          highest={this.state.highest}
          message={this.state.message}
        />
        <Game state={this.state} updateScore={this.onUpdateScore} />
      </div>
    );
  }
}
