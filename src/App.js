import React, { Component } from "react";
import ZipCode from "./components/ZipCode";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <ZipCode zip="10304" />
      </>
    );
  }
}

export default App;
