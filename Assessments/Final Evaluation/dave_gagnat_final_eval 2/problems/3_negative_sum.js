/**************************************************************************************
Write a function `negativeSum` that takes in an array of numbers and returns a number
representing the sum of all negative numbers in the given array.

Examples:

negativeSum([-3, 12, -5, -2, 3]); // => -10
negativeSum([2, 1, 7]);           // => 0

Difficulty: Easy
*************************************************************************************/

function negativeSum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i += 1) {
    var num = arr[i];

    if (Math.sign(num) === -1) {
      sum += num;
    }
  }

  return sum;
}

console.log(negativeSum([-3, 12, -5, -2, 3])); // => -10
console.log(negativeSum([2, 1, 7]));           // => 0

// Nice job! We can also check whether `num` is less than 0 -BL

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = negativeSum;
