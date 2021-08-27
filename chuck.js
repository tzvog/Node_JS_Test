const https = require('https');
const chuck = 'https://api.chucknorris.io/jokes/random'
const wanted_value = 'value'

// gets a function and acts upon the chuck norris quote
function get_chuck_qoute(callback)
{
  https.get(chuck, (res) => {
    res.on('data', (d) => {
        // parses the data into a json and puts the values into our function 
      json_parsed_object = JSON.parse(d); 
      callback(json_parsed_object[wanted_value]);
    });
  
  }).on('error', (e) => {
    console.error(e);
  });
}

module.exports = get_chuck_qoute; 