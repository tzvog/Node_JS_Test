const https = require('https');
const chuck = 'https://api.chucknorris.io/jokes/random'
const kanye = 'https://api.kanye.rest'
const quote = 'quote'

function get_kanye_qoute(callback)
{
  https.get(kanye, (res) => {
    res.on('data', (d) => {
      // console.log(typeof(callback)); 
      json_parsed_object = JSON.parse(d); 
      callback(json_parsed_object[quote]);
      // process.stdout.write(json_parsed_object[quote]); 
      // quotetttt =  json_parsed_object[quote]; 
    });
  
  }).on('error', (e) => {
    console.error(e);
  });
}

module.exports = get_kanye_qoute; 
