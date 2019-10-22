import React from "react";
import logo from "./logo.svg";

import "./App.css";

import Page from "./components/page/page";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Page></Page>
      </div>
    );
  }
}

export default App;
