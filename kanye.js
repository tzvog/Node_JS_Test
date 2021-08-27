const https = require('https');
const kanye = 'https://api.kanye.rest'
const wanted_value = 'quote'

// a function that will recive a function and run the kanye quote on it
function get_kanye_qoute(callback)
{
  https.get(kanye, (res) => {
    res.on('data', (d) => {
      json_parsed_object = JSON.parse(d); 
      callback(json_parsed_object[wanted_value]);
    });
  
  }).on('error', (e) => {
    console.error(e);
  });
}

module.exports = get_kanye_qoute; 
