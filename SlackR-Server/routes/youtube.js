import axios from axios;

let URL = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCCsOkHMBalcACYIQaTUOapalxPn0Y5mbM'
// &part=snippet,contentDetails,statistics,status

const youtubeController = {
  getUsers = () => {
    axios.get(URL, {
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

module.exports = youtubeController;