// const http = require('http');
// const url = require('url');

// const server = http.createServer(); 
// server.listen(3000); 

const express = require('express');
const app = express(); 
const Enum = require('enum');

const kanye = require('./kanye.js');
const chuck = require('./chuck.js');
const name_parse = require('./nameParse.js'); 

var request = {"requests": 0, "distribution": []};  


const cutoff_year = 2000; 
// const ret_type = new Enum({'A': 'chuck-norris-joke', 'B': 'kanye-quote', 'C': 'name-sum'});


app.get('/api/surprise' ,(req, res) => {

    const birth_year = parseInt(req.query.birth_year); 

    name_parse(req.query.name, (handle_res) =>
    {
        res.status(200).json({type: true, result: handle_res});
    });

    // if(birth_year > cutoff_year)
    // {
        // kanye((handle_res) =>
        // {
        //     res.status(200).json({type: toString(ret_type.B), result: handle_res});
        // }
        // ); 
    // }
    // else
    // {
    //     chuck((handle_res) =>
    //     {
    //         res.status(200).json({type: toString(ret_type.B), result: handle_res});
    //     }
    //     ); 
    // }
    

    // res.status(200).send(handle_res); 
    // res.status(101).json({type: true, result: handle_res});
    // kanye((handle_res) =>
    //  { res.status(443).send(handle_res); }
    // ); 

    // bbb('http://ip-api.com/json', function(results){
    //     console.log('results:',results);     
    // }); 

    // return res.status(443).send; 
    // res.status(443).send; 
    // req.params.birth_year = parseInt(req.params.birth_year);   
    // console.log(typeof(req.params.birth_year));

    // console.log(req.params.birth_year == 1980); 
    // if (req.params.birth_year === 1980)
    // {
    //     res.send(req.query.birth_year);  
    //     console.log("bitches"); 
    // }
 
    // res.status(443).json({isConnected: true})

    // if(b_year > 1900)
    // {
    //     console.log("yo");
    // }
    // else
    // {
    //     res.status(101).json({isConnected: true})
    // }
    
});

app.listen(3000, console.log("Listening on port"));

// http.createServer(
//     (req, res) =>
//     {

//     }
// ).listen(3000)