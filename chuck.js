const https = require('https');
const chuck = 'https://api.chucknorris.io/jokes/random'; 
const wanted_value = 'value';
const chuck_type = 'chuck-norris-joke';

// gets a function and acts upon the chuck norris quote
function get_chuck_qoute(screen_print, callback)
{
  https.get(chuck, (res) => {
    res.on('data', (d) => {
        // parses the data into a json and puts the values into our function 
      json_parsed_object = JSON.parse(d); 
      callback(screen_print, chuck_type, json_parsed_object[wanted_value]);
    });
  
  }).on('error', (e) => {
    console.error(e);
  });
}

module.exports.response = get_chuck_qoute; 
module.exports.type = chuck_type; 