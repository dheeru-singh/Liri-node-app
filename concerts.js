var fs = require("fs");
var axios=require("axios");
var moment = require('moment');
const chalk = require('chalk');
function myConcert(userInput){
    var artist = userInput;
   
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(
      function(response){
       // console.log( response.data);
       
        for(var i=0; i<response.data.length; i++){
            console.log(chalk.cyan("Concert Venue Name: ") + response.data[i].venue.name);
            console.log(chalk.cyan("Concert location : " ) + response.data[i].venue.city + response.data[i].venue.region + response.data[i].venue.country); 
            console.log(chalk.cyan("Concert Time: ") + moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'));
            console.log('--------------------------------------------------')
            fs.appendFileSync('log.txt', "\r\n" + "-------------Concert Search Log-------------" + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "Venue Name: " + response.data[i].venue.name + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "Venue Time: " + moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A') + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------------"+ "\r\n", 'utf8');

        }
      }
  )
  .catch(function(error){
      console.log("Error occurred.");
  })
  }
  module.exports= myConcert;
