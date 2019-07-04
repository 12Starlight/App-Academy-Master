/******************************************************************************
Write a function firstOrLast(array) that takes in an array and returns either:

- the first element if there is an even number of elements in the array

- the last element if there is an odd number of elements in the array

You can assume the array contains at least one element.

Examples:

firstOrLast(['a', 'b', 'c', 'd']) => 'a'
firstOrLast(['Jenny', 'Mary', 'Mark']) => 'Mark'
*******************************************************************************/

// Build helper function isEven(num)
// Determine, if number is even
function isEven(num) {
  return num % 2 === 0;
}

function firstOrLast(array) {
  if (isEven(array.length)) { // if we have an even number of eleements
    return array[0];          // then return the first element
  } else {                            // else we have an odd number of elements    
    return array[array.length - 1];   // then return the last element
  }
}
console.log(firstOrLast(['a', 'b', 'c', 'd'])); // => 'a'
console.log(firstOrLast(['Jenny', 'Mary', 'Mark'])); // => 'Mark'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstOrLast;
