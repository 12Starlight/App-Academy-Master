/*******************************************************************************
Write a function reverseOddRange(start, end) that returns an array containing all
odd numbers between 'start' and 'end'  in reverse-sequential order. Use a
loop to do this.

Examples:

reverseOddRange(10, 20) => [ 19, 17, 15, 13, 11 ]
reverseOddRange(3, 7) => [ 7, 5, 3 ]
reverseOddRange(9, 5) => []
*******************************************************************************/

// Build helper function isOdd(num)
// Determine, if number is odd
function isOdd(num) {
  return num % 2 === 1;
}

function reverseOddRange(start, end) {
  var oddRange = [];

  for (var i = end; i >= start; i -= 1) {
    if (isOdd(i)) {
      oddRange.push(i); // Better Big O computation speed, than unshift()
    }
  }

  return oddRange;
}
console.log(reverseOddRange(10, 20)); // => [ 19, 17, 15, 13, 11 ]
console.log(reverseOddRange(3, 7)); // => [ 7, 5, 3 ]
console.log(reverseOddRange(9, 5)); // => []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseOddRange;
