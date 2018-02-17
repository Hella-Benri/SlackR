// import axios from 'axios';
var axios = require('axios');
var CircularJSON = require('circular-json');

// let URL = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCCsOkHMBalcACYIQaTUOapalxPn0Y5mbM'
// &part=snippet,contentDetails,statistics,status

// let URL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCCsOkHMBalcACYIQaTUOapalxPn0Y5mbM&channelId=UCCODtTcd5M1JavPCOr_Uydg&part=snippet,id&order=date&maxResults=20';

// let URL = https://www.youtube.com/watch?v=JcrSgLMFays

let URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=soccer&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyCCsOkHMBalcACYIQaTUOapalxPn0Y5mbM';

const youtubeController = {
  retrieveYoutubeFeed (req, res) {
    axios.get(URL, {
    })
    .then(function (response) {
      let videos = response.data.items;
      console.log('RETURNED VIDEOS', videos);
      let stringedResponse = CircularJSON.stringify(videos);
      // console.log('response', stringedResponse);
      // console.log('response', response.data.items);
      res.send(stringedResponse);
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }
}

// axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCCsOkHMBalcACYIQaTUOapalxPn0Y5mbM&channelId=UCexxxxxxxxxxxxxxxx&part=snippet,id&order=date&maxResults=20')
//   .then((response) => {
//     this.setState({video: response.results})
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// verifyUser(req, res, next) {
//   let query = "SELECT * FROM emps WHERE firstname=" + "'" + req.body.firstnameToVerify + "'" + "";
//   db.conn.many(query)
//     .then(verifiedUser => {
//       res.json(verifiedUser);
//       console.log('VERIFIED USER', verifiedUser);
//     })
//     .catch(err => {
//       console.log('error');
//       res.status(404).send(err);
//     })
// },

module.exports = youtubeController;