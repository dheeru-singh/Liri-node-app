//require("./dotenv").config();

//const keys = require("./keys.js");
const inquirer = require("inquirer");
const fs = require("fs");
const axios=require("axios");
const Spotify = require('node-spotify-api');
const getMovies = require("./getMovies.js");
const concert = require("./concerts.js");
const chalk = require('chalk');
const getSong = require("./spotify.js");

const userCommond=process.argv[2];
const userInput=process.argv[3];
//console.log(userInput);
switch(userCommond){
  case "help":
    console.log(chalk.cyan("concert-this\n" + "spotify-this-song\n" + "movie-this\n" + "do-what-it-says"));
    break;
  case "concert-this":
    concert(userInput);
    break;
  case "spotify-this-song":
    getSong(userInput);
    break;
  case "movie-this":
    getMovies(userInput);
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    console.log(chalk.cyan("LIRI doesn't understand that - Please type 'node liri.js help' for more information"));
}


function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (!error);
    console.log(data.toString());
    //split text with comma delimiter
    const dataArr = data.toString().split(',');
    if (dataArr[0] === "spotify-this-song") {
      const songcheck = dataArr[1].slice(1, -1);
      console.log("Song Check: "+songcheck)
      getSong(songcheck);
    }else if(dataArr[0] === "concert-this"){
      const venueName= dataArr[1].slice(1,-1);
      console.log("venue name :" + venueName);
      concert(venueName);
    }else if(dataArr[0] === "movie-this"){
      const movieName=dataArr[1].slice(1,-1);
      console.log("Movie Name" + movieName);
      getMovies(movieName);
    }
});
}