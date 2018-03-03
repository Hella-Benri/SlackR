import React, { Component } from 'react';
import Timer from './Components/Timer-Component.js';
import CookieClicker from './Components/Cookie-Clicker.js'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      returnedVideos: []
    }
  }

  componentDidMount() {
    this.retrieveYoutubeVideos();
  }

  retrieveYoutubeVideos = (that = this, userSearchQuery) => {
    axios.post('/retrieveYoutubeFeed', {
      // you should replace this query with the userSearchQuery's value you will provide
      searchQuery: 'yogscast'
    })
    .then(function (response) {
      let newReturnedVideos = that.buildNewVideosArray(response.data);
      that.setState({
        returnedVideos: newReturnedVideos,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  buildNewVideosArray = (responseData) => {
    return responseData.map(function(video){
      let videoURL = "http://www.youtube.com/embed/" + video.id.videoId;
      return <iframe className="ytplayer" type="text/html" width="640" height="360" src={videoURL} frameBorder="0"></iframe>;
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
