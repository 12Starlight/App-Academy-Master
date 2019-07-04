// 10/10 specs passing
// find my comments with -MS
// Really good job, lot's of good code, watch out for
// syntax errors - MS

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

  for (var i = end - 1; i >= 2; i -= 1) { // good reverse for loop but instead of
    // 2 you really want to use start - MS
    range.push(i);
  }

  return range;
}
console.log(reverseRange(2,7)); // => [6, 5, 4, 3, 2]
console.log(reverseRange(4,2)); // => []

// Good solution, just make sure to note my comment - MS

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
