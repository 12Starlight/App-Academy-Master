/*******************************************************************************
Write a function isElement(array, ele) that takes an array and an element.
The function should return true if the element is found inside of the array, it
should return false otherwise.

DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

isElement([1,2,3,4,5], 5) => true
isElement(["a", "b", "c"], "a") => true
isElement(["a", "b", "c"], "d") => false
*******************************************************************************/

/*
My Solution Usigg IndexOf

function isElement(array, ele){
  if (array.indexOf(ele) > -1) {
    return true;
  }

  return false;
}

*/

function isElement(array, ele) {
  for (var i = 0; i < array.length; i += 1) {
    var elm = array[i];

    if (elm === ele) { // If we find the 'ele' we need
      return true;
    }
  }
  return false; // return false, after we checked the entire array
}

console.log(isElement([1,2,3,4,5], 5)); // => true
console.log(isElement(["a", "b", "c"], "a")); // => true
console.log(isElement(["a", "b", "c"], "d")); // => false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isElement;
