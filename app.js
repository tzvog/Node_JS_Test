// const http = require('http');
// const url = require('url');

// const server = http.createServer(); 
// server.listen(3000); 

const express = require('express');
const app = express(); 
const kanye = require('./kanye.js');



app.get('/api/surprise' ,(req, res) => {

    const birthyear = parseInt(req.query.birth_year); 

    if(birthyear > 1900)
    {
        kanye((handle_res) =>
        {
            // res.status(200).send(handle_res); 
            // res.status(101).json({type: true, result: handle_res});
            res.status(200).json({type: true, result: handle_res});
        }
        ); 
    }
    

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