require("dotenv").config();

const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const fs = require("fs");
const axios=require("axios");
const chalk = require('chalk');
//const keys = require("./keys.js");

// Storing API keys in variables.
// const spotify = new Spotify(keys.spotify);
const spotify = new Spotify(keys.spotify);

function mySpotify(userInput){
    let song = userInput;
   
    if (!song) {
        song= "the sign Ace of Base" 
    }
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
          }
          console.log(chalk.cyan("Artist(s) name : ") + data.tracks.items[0].artists[0].name); 
          console.log(chalk.cyan("Song's name : ") + data.tracks.items[0].name); 
          console.log(chalk.cyan("Preview link : ") + data.tracks.items[0].preview_url); 
          console.log(chalk.cyan("Album name : ") + data.tracks.items[0].album.name); 

          fs.appendFileSync('log.txt', "\r\n" + "-------------Song Search Log-------------" + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Artist(s) name : " + data.tracks.items[0].artists[0].name + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Song's name : " + data.tracks.items[0].name + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Preview link : " + data.tracks.items[0].preview_url + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "Album name : " + data.tracks.items[0].album.name + "\r\n", 'utf8');
          fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------------"+ "\r\n", 'utf8');
      }
  )
    }
 module.exports=  mySpotify; 

