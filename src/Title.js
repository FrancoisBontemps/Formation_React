import React, { Component } from "react";
import ReactDOM from "react-dom";

export class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
Title.defaultProps = {
  text: "SALUT"
};
