import React, { Component } from "react";

export class MyFirstComponent extends Component {
  render() {
    //Autodocumentation thanks to la desctructuration <3
    const { title } = this.props;
    return <h1>{title}</h1>;
  }
}
//Acces statique à la classe
MyFirstComponent.defaultProps = {
  title: "PAR DEFAULT"
};
