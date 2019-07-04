/******************************************************************************
** Write a function oddRange(end) that takes in a number and returns an array containing
** all positive odd numbers up to `end`.
**
** Examples:
**
** oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
** oddRange(6); // => [ 1, 3, 5 ]
*/

// Build helper function isOdd(num)
// Let us know, if odd
function isOdd(num) {
  return num % 2 === 1;
}
console.log(isOdd(11), isOdd(14));

function oddRange(end) {
  var numArr = [];

  for(var i = 1; i <= end; i += 1) {
    if(isOdd(i)) {
      numArr.push(i);
    }
  }

  return numArr;
}
console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6)); // => [ 1, 3, 5 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = oddRange;
