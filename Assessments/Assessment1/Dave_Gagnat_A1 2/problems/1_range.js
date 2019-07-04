/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

function range(start, end) {
  var range = [];

  for(var i = start; i <= end; i += 1) { // style-wise, put a space between for and the open parens, eg for (
    range.push(i);
  }

  return range; // perfect logic. good solution -PG
}
console.log(range(1,4)); // => [1,2,3,4]
console.log(range(4,2)); // => []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;
