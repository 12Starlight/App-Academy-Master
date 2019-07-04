/*******************************************************************************
Write a function isSquare(number) that takes in a number and returns true if the
number is a perfect square, false otherwise. A perfect square is a number that is
the result of squaring another number. For example, 3 * 3 is 9, so 9 is perfect
square. 4 * 4 is 16, so 16 is a perfect square. 18 is not a perfect square.

Examples:

isSquare(7) => false
isSquare(15) => false
isSquare(18) => false
isSquare(25) => true
isSquare(36) => true
isSquare(9) => true
isSquare(16) => true
*******************************************************************************/

function isSquare(number) {
  // for (var i = 0; i <= number; i += 1) {
  //   if (number / i === i) { // wanted to use %, not sure how though without more lines making it more complicated
  //     return true;
  //   }
  // }

  for (var i = 0; i < number; i += 1) {
    if (i * i === number) { // if i * i results in the 'number',
      return true;          // then 'number' must be a perfect square
    }
  }

  return false; // return false after we have checked for all possible 'i'ss
}
console.log(isSquare(7)); //  => false
console.log(isSquare(15)); //  => false
console.log(isSquare(18)); //  => false
console.log(isSquare(25)); //  => true
console.log(isSquare(36)); //  => true
console.log(isSquare(9)); //  => true
console.log(isSquare(16)); //  => true

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isSquare;
