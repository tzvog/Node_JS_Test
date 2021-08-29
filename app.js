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
const cutoff_year = 2000; 

const repspone_type = {
    TYPE1: 'chuck-norris-joke',
    TYPE2: 'kanye-quote',
    TYPE3: 'name-sum'
};

// local varriables
var request = {"requests": 0, "distribution": {}};


app.get('/api/surprise' ,(req, res) => {

    function success(handle_res)
    {
        res.status(200).json({type: repspone_type.TYPE1, result: handle_res});
    }

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

    // checks if the birthyear is an actual number
    if(isNaN(birth_year))
    {
        responses.fail(res);
        return;  
    }

    if(birth_year <= cutoff_year)
    {
        chuck(success); 
        return; 
    }
    else
    {
        if(req.query.name[0] != 'A' && req.query.name[0] != 'Z')
        {
            kanye(success);
            return;  
        }
    }

    if(req.query.name[0] != 'Q')
    {
        name_parse(req.query.name, success);
        return; 
    }


    responses.fail(res); 
});

app.listen(3000, console.log("Listening on port"));
