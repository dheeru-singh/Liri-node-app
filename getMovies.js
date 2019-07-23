var fs = require("fs");
var axios=require("axios");
const chalk = require('chalk');

function getMovies(userInput){
    var movieName = userInput;
   
    if (!movieName) {
      console.log("If you haven't watched 'Mr. Nobody,' then you should.")
      console.log("It's on Netflix!")
      movieName = "Mr.-Nobody"
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
      function(response){
         // console.log( response.data);
          console.log(chalk.cyan("Title of the movie: ")+ response.data.Title);
          console.log(chalk.cyan("Year the movie came out: ")+ response.data.Year);
          console.log(chalk.cyan("IMDB Rating of the movie: ")+ response.data.imdbRating);
          console.log(chalk.cyan("Rotten Tomatoes Rating of the movie: ")+ response.data.Ratings[1].Value);
          console.log(chalk.cyan("Country where the movie was produced: ")+ response.data.Country);
          console.log(chalk.cyan("Language of the movie: ")+ response.data.Language);
          console.log(chalk.cyan("Plot of the movie: ")+ response.data.Plot);
          console.log(chalk.cyan("Actors in the movie: ")+ response.data.Actors);

          fs.appendFileSync('log.txt', "\r\n" + "-------------Movie Search Log-------------" + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Title of the movie: " + response.data.Title + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Year the movie came out: "+ response.data.Year + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "IMDB Rating of the movie: "+ response.data.imdbRating + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Rotten Tomatoes Rating of the movie: "+ response.data.Ratings[1].Value + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Country where the movie was produced: "+ response.data.Country + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Language of the movie: "+ response.data.Language + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Plot of the movie: "+ response.data.Plot + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Actors in the movie: "+ response.data.Actors + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------------"+ "\r\n", 'utf8');


      }
  )
  .catch(function(error){
      console.log("Error occurred.");
  })
  }
  module.exports= getMovies;