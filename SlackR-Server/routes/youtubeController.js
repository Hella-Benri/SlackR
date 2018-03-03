var axios = require('axios');

const youtubeController = {
  retrieveYoutubeFeed (req, res) {
    let URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + req.body.searchQuery + '&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyCCsOkHMBalcACYIQaTUOapalxPn0Y5mbM';
    axios.get(URL, {
    })
    .then(function (response) {
      // send arr of video objs
      res.send(response.data.items);
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }
}

module.exports = youtubeController;