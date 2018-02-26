import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js'
import GreeterContainer from './GreeterContainer.js';
import Counter from './Counter.js';
import CounterContainer from './CounterContainer.js';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloWorld/>
        </header>
        <div>
          <GreeterContainer />
        </div>
        <div>
          <CounterContainer />
        </div>
      </div>
    );
  }
}

export default App;
