const bad_paramets_message = "bad parameters try again";

// response functions 
function fail(res)
{
    res.status(400).send(bad_paramets_message);
}

function success(screen_print, type ,handle_res)
{
        screen_print.status(200).json({type: type, result: handle_res});
}

module.exports.fail = fail;
module.exports.success = success; 