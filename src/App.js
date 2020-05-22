import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput username="Nalani" />
        <UserOutput username="Jackson" />
        <UserOutput username="Petunia" />
      </div>
    );
  }
}

export default App;
