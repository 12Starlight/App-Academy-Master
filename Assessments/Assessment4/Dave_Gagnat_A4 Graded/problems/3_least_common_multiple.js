/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/

function leastCommonMultiple(num1, num2) {
  var product = num1 * num2;

  for (var i = num1; i <= product; i += 1) {
    if (i % num1  == 0 && i % num2 === 0) {
      return i;
    }
  }
}

// Perfect -AZ

console.log(leastCommonMultiple(2, 3)); // => 6
console.log(leastCommonMultiple(6, 10)); // => 30
console.log(leastCommonMultiple(24, 26)); // => 312
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
