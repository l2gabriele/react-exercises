import React, { Component } from 'react';
import logo from './logo.svg';
import HelloWorldLogo from './HelloWorld.js';
import Counter from "./Counter.js";
import CounterListApp from "./CounterList.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <ul>
            <CounterListApp />
          </ul>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
