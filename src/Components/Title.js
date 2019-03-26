import React, { Component } from "react";
import purple from "@material-ui/core/colors/purple";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export class Title extends Component {
  render() {
    const primary = purple[100];
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          {" "}
          <Typography variant="h6" color="inherit">
            {this.props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
Title.defaultProps = {
  text: "name"
};
