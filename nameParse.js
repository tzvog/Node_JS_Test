const A_ascii_value_as_one = 'A'.charCodeAt(0) - 1; 
const A_ascii_value = 65; 
const Z_ascii_value = 90; 
const name_parse_type = 'name-sum';
var recent_sum = 0; 

// gets a function and acts upon the chuck norris quote
function parse_name(screen_print, callback)
{
  // activates the call back function on the sum
  callback(screen_print, name_parse_type, recent_sum);
}

function check_validity(name, birth_year)
{
    // moves the letters into uppercase 
    name = name.toUpperCase(); 
    
    // initial condition 
    if(name[0] == 'Q')
    {
      return false; 
    }

  // creates a base for the sum 
  sum = 0; 

  // goes through all the letters and prepares for possible call of function 
  for(let letter of name)
  {

    // TODO check if your letter is out of range but otherwise converts and sums the nuber
    if(letter === ' ')
    {
        continue; 
    } 
    // this is not a valid letter 
    else if(letter.charCodeAt(0) < A_ascii_value ||
     letter.charCodeAt(0) > Z_ascii_value)
    {
      return false;
    }
    else
    {
      sum += (letter.charCodeAt(0) - A_ascii_value_as_one); 
    }
  }
    
  recent_sum = sum; 
  return true; 
}

module.exports.response = parse_name;
module.exports.type = name_parse_type;
module.exports.check_validity = check_validity;  