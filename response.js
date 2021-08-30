join = require('path'); 

const bad_paramets_message = "bad parameters type";
const bad_parameter_values_message = "bad parameter values";
const no_valid_response_message = "no valid response";

// response functions 
function bad_parameters_type(res)
{
    res.status(400).send(bad_paramets_message);
}

function bad_parameters_values(res)
{
    res.status(400).send(bad_parameter_values_message);
}

function no_valid_response(res)
{
    res.status(400).send(bad_parameter_values_message);
}

function success(screen_print, type ,handle_res)
{
    screen_print.status(200).json({type: type, result: handle_res});
}

function stats_response(res, total_request_counter)
{
    res.status(200).json(total_request_counter); 
}

function about_me_repsponse(res)
{
    img_path = join.resolve() + '\\me.jpg'; 
    res.status(200).sendFile(img_path);
}

module.exports.bad_parameters_type = bad_parameters_type;
module.exports.bad_parameters_values =  bad_parameters_values;
module.exports.no_valid_response = no_valid_response; 
module.exports.success = success; 
module.exports.stats_response = stats_response; 
module.exports.about_me_repsponse = about_me_repsponse; 