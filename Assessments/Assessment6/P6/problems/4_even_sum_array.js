/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/

// Build helper function sumEven(array)
// Sums all even numbers in an array
function sumEven(num) {
  var sum = 0;

  for (var i = 2; i <= num; i += 2) {

    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumEven([3]));

// Build Main Function
function evenSumArray(array) {
  // var sum = 0;
  var newArray = [];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];
    var evenSum = sumEven(num);

    newArray.push(evenSum);
  }

  return newArray;
}
console.log(evenSumArray([6, 7, 5])); // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])); // => [ 2, 20, 2, 6 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenSumArray;
