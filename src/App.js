import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    users: [
      { username: "Nalani" },
      { username: "Jackson" },
      { username: "Petunia" },
    ],
  };
  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
        <UserOutput username={this.state.users[2].username} />
      </div>
    );
  }
}

export default App;
