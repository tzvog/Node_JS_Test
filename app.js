// imported libraries 
const express = require('express');
const app = express(); 
const Enum = require('enum');

// local files
const kanye = require('./kanye.js');
const chuck = require('./chuck.js');
const name_parse = require('./nameParse.js'); 
const responses = require('./response'); 

// const variables 
const types = [chuck, kanye, name_parse]; 

// local varriables
var total_request_counter = {}; 
var distribution_keys = {}; 

app.get('/api/surprise' ,(req, res) => {

    // checks if we the right amount of parameters and correct ones
    if ( typeof (req.query.birth_year) === 'undefined' || 
        typeof (req.query.name) === 'undefined' || 
        Object.keys(req.query).length != 2)
    {
        responses.bad_parameters(res); 
        return; 
    }

    // converts the number to and int
    const birth_year = parseInt(req.query.birth_year); 
    const name = req.query.name; 

    // checks if the birthyear is an actual number
    if(isNaN(birth_year))
    {
        responses.birth_year_is_NAN(res);
        return;  
    }

    valid_responses = []; 

    // add valid ones to list
    types.forEach((item, index, array) => {
       
        // if the response is valid add it to the list
        if(item.check_validity(name, birth_year))
        {
            valid_responses.push(item); 
        }
    })

    // checks that we have one valid responce 
    if(valid_responses.length == 0)
    {
        responses.no_valid_response; 
        return; 
    }
    // checks if we have many valid repsonses and if so choose a random one
    else
    {
        final_repsonse = valid_responses[Math.floor((Math.random()*valid_responses.length))]; 
    }

    // udates the counter 
    total_request_counter["requests"] += 1; 
    item_location = distribution_keys[final_repsonse.type]; 
    total_request_counter["distribution"][item_location]["count"] += 1;

    // sends a final response 
    final_repsonse.response(res,  responses.success);
});

// returns the given stats 
app.get('/api/stats' ,(req, res) => {

    res.status(200).json(total_request_counter); 
});

// this function sets off initial uses for the code 
function init()
{
    // sets the keys to default values 
    total_request_counter["requests"] = 0; 
    total_request_counter["distribution"] = []; 
   
    // for each type create a link in the dictionary and where the key is in the list 
    types.forEach((item, index, array) => {
        total_request_counter["distribution"].push({"type": item.type, "count": 0}); 
        distribution_keys[item.type] = index;
    })
}

// calls the init function
init();

// starts listening on the port
app.listen(3000, console.log("Listening on port"));


