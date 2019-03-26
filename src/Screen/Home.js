import React, { Component } from "react";
import { SearchBar } from "../Components/SearchBar";
import { Title } from "../Components/Title.js";
import { Button } from "../Components/Button.js";
import { getUser, getRepos } from "../Network/APIgithub";
import { User } from "../Components/User";

// 0bc94e5845b232a9e21bec253d29b65d050ccacb

export class Home extends Component {
  state = {
    searchBar: "",
    userProfile: {},
    repos: []
  };

  /*
//Fonction de fonction, bien pour passer des variables en arguments
  onFieldChange = key => value => {
    this.setState({ [key]: value });
  };
*/
  onSearchChange = async value => {
    this.setState({ searchBar: value });
  };
  onSearchClick = async () => {
    const { searchBar } = this.state;
    const profile = await getUser(searchBar);
    const rep = await getRepos(searchBar);
    this.setState({ repos: rep, userProfile: profile });
  };

  render() {
    const { searchBar, userProfile, repos } = this.state;
    return (
      <div>
        <Title name="GitHub DashBoard" />
        <div style={{ display: "flex" }}>
          <SearchBar value={searchBar} onChange={this.onSearchChange} />
          <Button label="Search" onClick={this.onSearchClick} />
        </div>
        <br />
        <User profile={userProfile} repos={repos} />
      </div>
    );
  }
}
