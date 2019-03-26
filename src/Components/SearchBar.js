import React, { Component } from "react";
import purple from "@material-ui/core/colors/purple";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

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
    const { username } = this.state;
    return (
      <Toolbar align="center">
        <IconButton color="inherit" aria-label="Open drawer" />
        <Typography variant="h6" color="inherit" noWrap />
        <div>
          <input
            type="text"
            value={username}
            onChange={this.handleChange}
            placeholder="UserName"
          />
        </div>
      </Toolbar>
    );
  }
}
