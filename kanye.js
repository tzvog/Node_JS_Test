const https = require('https');
const kanye = 'https://api.kanye.rest'
const wanted_value = 'quote'
const kanye_type = 'kanye-quote';

// a function that will recive a function and run the kanye quote on it
function get_kanye_qoute(callback)
{
  https.get(kanye, (res) => {
    res.on('data', (d) => {
      // parses the data into a json and puts the values into our function 
      json_parsed_object = JSON.parse(d); 
      callback(kanye_type, json_parsed_object[wanted_value]);
    });
  
  }).on('error', (e) => {
    console.error(e);
  });
}

module.exports.response = get_kanye_qoute;
module.exports.type = kanye_type; 
