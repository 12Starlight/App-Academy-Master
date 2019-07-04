/*******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of `arr` for which the given callback
returns a truthy value.

Examples:

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
result1; // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
result2; // => [ 2, 4, 8 ]
*******************************************************************************/

// Build helper function myForEach(array)
// Iterates through an array and creates an elm, index, array1
function myForEach(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i += 1) {
    var elm = array[i];

    newArray.push(elm, i, array);
  }
}
console.log(myForEach(['a', 1, 'b', true]));


function mySelect(arr, cb) {
  var newArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    var elm = arr[i];
    var values = myForEach(arr);
    var newValues = cb(values);

    if (newValues) {
      newArray.push(newValues);
    }
  }

  return newArray;
}

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
console.log(result1); // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
console.log(result2); // => [ 2, 4, 8 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = mySelect;
