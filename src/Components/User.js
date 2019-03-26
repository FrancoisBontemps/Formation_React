import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export class User extends Component {
  render() {
    const { profile, repos } = this.props;
    console.log(profile);
    return (
      <div align="center">
        GitHub ID : {profile.name}
        <img src={profile.avatar_url} />
        <div>
          {" "}
          {repos.map(value => (
            <Card>
              <CardContent>
                <Typography>{value.name}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
