var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "ecd32552bfda42e6a13f59895fb84686",
  secret: "bd118143f45d4ec6b51163d210b5e6e9"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});