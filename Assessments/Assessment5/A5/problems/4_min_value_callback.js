/*******************************************************************************
Write a funtion minValueCallback(array, cb) that takes in an array of numbers and
a callback. The function should call `cb`, passing in the minimum number of the array.
`minValueCallback` should return the return value of `cb`. If the array is empty,
then pass `null` into `cb`.

Examples:

// Math.abs is a built in function to get the absolute value of anumber
var array1 = [-2, -7, 0, 8];
minValueCallback(array1, Math.abs); // => 7

// example cb
function double(n) {
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
minValueCallback(array2, double); // => 18
*******************************************************************************/

/*
My Solution

// Build helper function minValue(array)
// determine the minimum value in the array
function minValue(array) {
  var min = null;

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (num < min) {
      min = num;
    // }
    // else if (array === []) {
    //   return null;
    }
  }

  return min;
}
console.log(minValue([1, 4, 3, -3, 8]))


function minValueCallback(array, cb) {
  var min = minValue(array);

  if (cb(min) === null) {
    return null;
  } else {
    return cb(min);
  }
 }

 */

 function minValueCallback(array, cb) {
   var min = null;

   for (var i = 0; i < array.length; i += 1) {
     var num = array[i];

     if (min === null || num < min) {
       min = num;
     }
   }

   var result = cb(min);
   return result;
 }

// Math.abs is a built in function to get the absolute value of anumber
var array1 = [-2, -7, 0, 8];
console.log(minValueCallback(array1, Math.abs)); // => 7

// example cb
function double(n) {
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
// console.log(minValue(array2));
console.log(minValueCallback(array2, double)); // => 18

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minValueCallback;
