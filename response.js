const bad_paramets_message = "bad parameters try again";
const bad_birth_year_message = "birth year is Nan";
const no_valid_response_message = "no valid response";

// response functions 
function bad_parameters(res)
{
    res.status(400).send(bad_paramets_message);
}

function birth_year_is_NAN(res)
{
    res.status(400).send(bad_birth_year_message);
}

function no_valid_response(res)
{
    res.status(400).send(bad_birth_year_message);
}

function success(screen_print, type ,handle_res)
{
    screen_print.status(200).json({type: type, result: handle_res});
}

module.exports.bad_parameters = bad_parameters;
module.exports.birth_year_is_NAN =  birth_year_is_NAN;
module.exports.no_valid_response = no_valid_response; 
module.exports.success = success; 