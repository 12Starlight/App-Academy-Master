/*******************************************************************************
Write a function evenRange(start, end) that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

Examples:

evenRange(13, 20) => [ 14, 16, 18, 20 ]
evenRange(4, 11) => [ 4, 6, 8, 10 ]
evenRange(8, 5) => []
*******************************************************************************/

// Build helper function isEven(num)
// Determines, if number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(3), isEven(12));

// Main function
function evenRange(start, end) {
  var evenArr = [];

  for(var i = start; i <= end; i += 1) {
    if(isEven(i)) {
      evenArr.push(i);
    }
  }

  return evenArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenRange;
