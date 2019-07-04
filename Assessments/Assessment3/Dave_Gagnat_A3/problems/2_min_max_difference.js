/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function minMaxDifference(array){
  var difference = null;
  var max = array[0];
  var min = array[0];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (num > max) {
      max = num;
    } else if (num < min) {
      min = num;
    }
  }

  difference = max - min;
  return difference;
}
console.log(minMaxDifference([1,2,3,4,5])); // => 4
console.log(minMaxDifference([5,4,3,2,1])); /// / => 4
console.log(minMaxDifference([4,2,5,1,-5])); // => 10

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
