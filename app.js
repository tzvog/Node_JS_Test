// imported libraries 
const express = require('express'); 

// local files
const kanye = require('./supriseResponses/kanye.js');
const chuck = require('./supriseResponses/chuck.js');
const name_parse = require('./supriseResponses/userNameSum.js'); 
const responses = require('./response'); 

// const variables 
const app = express();
const types = [chuck, kanye, name_parse]; 

// local varriables
var total_request_counter = {"requests": 0, "distribution": []}; 
var distribution_keys = {}; 

// suprise request
app.get('/api/surprise' ,(req, res) => {

    // checks if we the right amount of parameters and correct ones
    if ( typeof (req.query.birth_year) === 'undefined' || 
        typeof (req.query.name) === 'undefined' || 
        Object.keys(req.query).length != 2)
    {
        responses.bad_parameters_type(res); 
        return; 
    }

    // converts the number to and int and gets the name from the user
    const birth_year = parseInt(req.query.birth_year); 
    const name = req.query.name; 

    // checks if the birthyear is an actual number
    if(isNaN(birth_year) || (name.length == 0))
    {
        responses.bad_parameters_values(res);
        return;  
    }

    let valid_responses = []; 

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

    // we have a valid response 
    let final_repsonse = valid_responses[Math.floor((Math.random()*valid_responses.length))]; 
 

    // udates the counter 
    total_request_counter["requests"] += 1; 
    item_location = distribution_keys[final_repsonse.type]; 

    // checks if we have seen this item before and if not adds it to the dictionary
    // otherwise upadtes the counter
    if(typeof(item_location) === 'undefined')
    {
       total_request_counter["distribution"].push({"type": final_repsonse.type, "count": 1});
       distribution_keys[final_repsonse.type] = (total_request_counter["distribution"].length - 1);
    }
    else
    {
        total_request_counter["distribution"][item_location]["count"] += 1;
    }
    
    // sends a final response 
    final_repsonse.response(res,  responses.success);
});

// returns the given stats 
app.get('/api/stats' ,(req, res) => {

    responses.stats_response(res, total_request_counter); 
})

// a little about me
app.get('/api/aboutme' ,(req, res) => {

    responses.about_me_repsponse(res);  
})

// starts listening on the port
app.listen(3000, console.log("Listening on port"));


