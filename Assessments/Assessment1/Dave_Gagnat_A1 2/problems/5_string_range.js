/*******************************************************************************
Write a function stringRange(min, max, step) that takes in 3 numbers as parameters
The function should return a string containing all numbers between `min` and `max`
at `step` intervals concatenated together.

Examples:

stringRange(0, 12, 2) => '024681012'
stringRange(3, 20, 5) => '381318'
*******************************************************************************/

function stringRange(min, max, step) {
  var rangeArr = [];

  for(var i = min; i <= max; i += step) {
    rangeArr.push(i);
  }

  var conStr = rangeArr.join('');
  return conStr; // perfect! -PG
}
console.log(stringRange(0, 12, 2)); // => '024681012'
console.log(stringRange(3, 20, 5)); // => '381318'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = stringRange;
