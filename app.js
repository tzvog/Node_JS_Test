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
        responses.fail(res); 
        return; 
    }

    // converts the number to and int
    const birth_year = parseInt(req.query.birth_year); 
    const name = req.query.name; 

    // checks if the birthyear is an actual number
    if(isNaN(birth_year))
    {
        responses.fail(res);
        return;  
    }

    valid_responses = []; 

    if(chuck.check_validity(name, birth_year))
    {
        console.log("chuckyyyy"); 
    }

    chuck.response(res,  responses.success);

    // name_parse.response(res, req.query.name, success);
    // kanye.response(res, responses.success);

    // if(birth_year <= cutoff_year)
    // {
    //     chuck.response(success); 
    //     return; 
    // }
    // else
    // {
    //     if(req.query.name[0] != 'A' && req.query.name[0] != 'Z')
    //     {
    //         kanye.response(success);
    //         return;  
    //     }
    // }

    // if(req.query.name[0] != 'Q')
    // {
    //     name_parse(req.query.name, success);
    //     return; 
    // }


    // responses.fail(res); 
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


