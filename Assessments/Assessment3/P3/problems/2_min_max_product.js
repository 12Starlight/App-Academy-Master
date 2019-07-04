/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

function minMaxProduct(array){
  var product = null;
  var lgValue = array[0]; // 0
  var smValue = array[0]; // 0

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (num > lgValue) { // If the current num is greater than max, then replace max
      lgValue = num;
    } else if (num < smValue) {
      smValue = num;
    }

    // else {
    //   smValue = num;
    // }
    // if (num < smValue) {
    //   smValue = num;
    // }

  }

  product = lgValue * smValue;
  return product;
}
console.log(minMaxProduct([6, 3, 7, 2])); // => 14
console.log(minMaxProduct([0, 1, -5, 3, 6])); // => -30

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
