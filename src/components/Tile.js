import React, { Component } from "react";

export default class Tile extends Component {
  clicked = () => {
    this.props.handleClick(this.props.id);
  };
  render() {
    let { image } = this.props;
    return (
      <div
        className="tile"
        onClick={this.clicked}
        style={{
          backgroundImage: `url(${image})`
        }}
      />
    );
  }
}
