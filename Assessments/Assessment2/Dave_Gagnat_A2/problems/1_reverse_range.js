/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3, 2]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  var range = [];

  for (var i = end - 1; i >= 2; i -= 1) {
    range.push(i);
  }

  return range;
}
console.log(reverseRange(2,7)); // => [6, 5, 4, 3, 2]
console.log(reverseRange(4,2)); // => []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
