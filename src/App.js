import React, { Component } from 'react';
import Timer from './Components/Timer-Component.js';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }

  componentDidMount () {
    axios.get('/retrieveUsers', {
      
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  addUserToUsersTable = () => {
    axios.post('/createUser', {
      firstname: 'Jongsoo',
      lastname: 'Yoon'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  verifyUser = () => {
    axios.post('/verifyUser', {
      firstnameToVerify: 'Jongsoo',
      lastnameToVerify: 'Yoon'
    })
    .then(function (response) {
      console.log('USER VERIFIED!', response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {

    return (
      <div className="App">
        <Timer/>
        <button style={{'position': 'absolute', 'top': '100px', 'zIndex': 4}} onClick={() => {this.addUserToUsersTable()}}>{'Add user'}</button>
        <button style={{'position': 'absolute', 'top': '200px', 'zIndex': 4}} onClick={() => {this.verifyUser()}}>{'Verify user'}</button>
      </div>
    );
  }
}

export default App;
