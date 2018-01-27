import React, { Component } from 'react';
import Timer from './Components/Timer-Component.js';
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
      </div>
    );
  }
}

export default App;
