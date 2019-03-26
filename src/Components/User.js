import React, { Component } from "react";
import { getRepos } from "../Network/APIgithub";

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
            <h3>{value.name}</h3>
          ))}
        </div>
      </div>
    );
  }
}
