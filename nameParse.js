 const A_ascii_value_as_one = 'A'.charCodeAt(0) - 1; 

// gets a function and acts upon the chuck norris quote
function parse_name(name,callback)
{

  // creates a base for the sum 
  sum = 0; 
  name = name.toUpperCase(); 

  // goes through all the letters 
  for(let letter of name)
  {

    // TODO check if your letter is out of range but otherwise converts and sums the nuber
    if(letter === ' ')
    {
        continue; 
    } 
    else
    {
      sum += (letter.charCodeAt(0) - A_ascii_value_as_one); 
    }
  }

  // activates the call back function on the sum
  callback(sum);
}

module.exports = parse_name; 