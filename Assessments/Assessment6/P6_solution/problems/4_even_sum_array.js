/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/

function evenSum(num) {
  var sum = 0;

  for (var i = 2; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

function evenSumArray(array) {
  var newNums = [];
  
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    var newNum = evenSum(num);
    newNums.push(newNum);
  }

  return newNums;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenSumArray;
