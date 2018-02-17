import React, { Component } from 'react';
import Timer from './Components/Timer-Component.js';
import CookieClicker from './Components/Cookie-Clicker.js'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      returnedVideos: [],
      currentVideoId: ''
    }
  }

  componentDidMount(that = this) {
    this.retrieveYoutubeVideos();
  }

  retrieveYoutubeVideos = (that = this) => {
    axios.post('/retrieveYoutubeFeed', {
      // you can repalce this query with a parameter value when you call it
      searchQuery: 'yogscast' 
    })
    .then(function (response) {
      let newReturnedVideos = [];
      for (let i = 0; i < response.data.length; i++) {
        let videoURL = "http://www.youtube.com/embed/" + response.data[i].id.videoId;
        newReturnedVideos.push(<iframe className="ytplayer" type="text/html" width="640" height="360" src={videoURL} frameBorder="0"></iframe>)
      }
      that.setState({
        returnedVideos: newReturnedVideos,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getUsers = () => {
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
      firstname: 'Kelly',
      lastname: 'Gilliam'
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
      firstnameToVerify: 'Kelly',
      lastnameToVerify: 'Gilliam'
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
        <CookieClicker/>
        <div>{this.state.returnedVideos}</div>
        <button style={{'position': 'absolute', 'top': '100px', 'zIndex': 4}} onClick={() => {this.addUserToUsersTable()}}>{'Add user'}</button>
        <button style={{'position': 'absolute', 'top': '200px', 'zIndex': 4}} onClick={() => {this.verifyUser()}}>{'Verify user'}</button>
        <button style={{'position': 'absolute', 'top': '300px', 'zIndex': 4}} onClick={() => {this.getUsers()}}>{'Get Users'}</button>        
      </div>
    );
  }
}

export default App;
