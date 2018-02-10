import React, { Component } from 'react';
import Timer from './Components/Timer-Component.js';
import CookieClicker from './Components/Cookie-Clicker.js'
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }
  
  render() {

    return (
      <div className="App">
        <Timer/>
        <CookieClicker/>
      </div>
    );
  }
}

export default App;
