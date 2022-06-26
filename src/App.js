import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  render() {
    const name = "react";
    return <MyComponent favoriteNumber={1}>리엑트</MyComponent>;
  }
}

export default App;
