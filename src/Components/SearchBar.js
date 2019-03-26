import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleChange = event => {
    this.setState({ username: event.target.value });
    const { username } = this.state;
    const { onChange } = this.props;
    onChange(username);
  };

  render() {
    const { placeHolder } = this.props;
    const { username } = this.state;
    return (
      <div>
        <input
          type="text"
          value={username}
          onChange={this.handleChange}
          placeholder={placeHolder}
        />
      </div>
    );
  }
}
