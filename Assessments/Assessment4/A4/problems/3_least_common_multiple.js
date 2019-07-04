/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/

/*
My Solution

function leastCommonMultiple(num1, num2) {
  var product = num1 * num2;

  for (var i = num1; i <= product; i += 1) {
    if (i % num1  == 0 && i % num2 === 0) {
      return i;
    }
  }
}

*/

function leastCommonMultiple(num1, num2) {
  var i = num1;

  while (true) {
    if (i % num2 === 0) {
      return i;
    }

    i += num1;
  }
}

function leastCommonMultiple(num1, num2) {
  for (var i = num1; true; i += num1) {
    if (i % num2 === 0) {
      return i;
    }
  }
}

console.log(leastCommonMultiple(2, 3)); // => 6
console.log(leastCommonMultiple(6, 10)); // => 30
console.log(leastCommonMultiple(24, 26)); // => 312
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
