const https = require('https');
const chuck = 'https://api.chucknorris.io/jokes/random'
const wanted_value = 'value'

function get_chuck_qoute(callback)
{
  https.get(chuck, (res) => {
    res.on('data', (d) => {
      json_parsed_object = JSON.parse(d); 
      callback(json_parsed_object[wanted_value]);
    });
  
  }).on('error', (e) => {
    console.error(e);
  });
}

module.exports = get_chuck_qoute; 