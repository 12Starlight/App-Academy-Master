/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

/*
My Solution

function greatestCommonFactor(num1, num2) {
  var largest = null;
  var sum = num1 + num2;

  for (var i = 2; i <= sum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      if (i > largest) {
        largest = i;
      }
    }
  }
  if (largest === null) {
    return 1;
  }

  return largest;
}

*/

/*
My Second Solution

function greatestCommonFactor(num1, num2) {
  var gcf = 1;

  for (var i = num1; i >= 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcf = i;
      return gcf;
    }
  }
}

*/

function greatestCommonFactor(num1, num2) {
  var i = 1;
  var gcf;

  while (i < num1 && i < num2) { // while i is less than both 'num1' and 'num2'
    if (num1 % i === 0 && num2 % i === 0) {
      gcf = i;
    }

    i += 1;
  }

  return gcf;
}

console.log(greatestCommonFactor(15, 25)); // => 5
console.log(greatestCommonFactor(16, 24)); // => 8
console.log(greatestCommonFactor(7, 11)); // => 1


function greatestCommonFactorFL(num1, num2) {
  var gcf = 1;

  for (var i = 1; i < num1 && i < num2; i += 1) {
    if (i % num1 === 0 && i % num2 === 0) {
      gcf = i;
    }
  }

  return gcf;
}

console.log(greatestCommonFactor(15, 25)); // => 5
console.log(greatestCommonFactor(16, 24)); // => 8
console.log(greatestCommonFactor(7, 11)); // => 1

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greatestCommonFactor;
