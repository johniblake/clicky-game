import React, { Component } from "react";
import Tile from "./Tile";

export default class Game extends Component {
  state = this.props.state;
  tiles = [
    { id: 1, image: require("../assets/images/dany.jpg") },
    { id: 2, image: require("../assets/images/oberyn.webp") },
    { id: 3, image: require("../assets/images/jon.jpg") },
    { id: 4, image: require("../assets/images/petyr.png") },
    { id: 5, image: require("../assets/images/tyrion_cup.jpg") },
    { id: 6, image: require("../assets/images/sansa.png") },
    { id: 7, image: require("../assets/images/margaery.jpg") },
    { id: 8, image: require("../assets/images/arya.jpg") },
    { id: 9, image: require("../assets/images/sandor.png") },
    { id: 10, image: require("../assets/images/beric.jpg") },
    { id: 11, image: require("../assets/images/brienne.jpg") },
    { id: 12, image: require("../assets/images/varys.jpg") }
  ];

  render() {
    this.tiles = this.shuffleArray(this.tiles);
    return (
      <div>
        <main className="container">
          {this.tiles.map(tile => {
            return (
              <Tile
                id={tile.id}
                key={tile.id}
                image={tile.image}
                handleClick={this.handleClick}
              />
            );
          })}
        </main>
      </div>
    );
  }

  handleClick = id => {
    this.props.updateScore(id);
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
}
