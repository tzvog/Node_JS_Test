const bad_paramets_message = "bad parameters try again";

// response functions 
function fail(res)
{
    res.status(400).send(bad_paramets_message);
}

module.exports.fail = fail;