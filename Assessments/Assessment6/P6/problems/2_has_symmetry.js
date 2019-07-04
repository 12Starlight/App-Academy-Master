/*******************************************************************************
Write a function hasSymmetry(array) that takes in an array. The function should
return true if the array has symmetry, false otherwise. For an array to have symmetry,
it should be the same forwards and backwards.

TIP:
In JavaScript, it is not possible to compare arrays for equality with `===`.
In other words, `[1, 2, 3] === [1, 2, 3]` evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) => true
hasSymmetry([1, 2, 3, 3, 4, 1]) => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) => false
*******************************************************************************/

/*
My Solution

function hasSymmetry(array) {
  for (var i = 0; i < array.length - 2; i += 1) {
    var elm = array[i];
    var fElm = array[i + 1];
    var bfElm = array[i - 1];
    var bElm = array[i + 2];

    if (fElm === elm && bElm !== bfElm) {
      return false;
    }
  }

  return true;
}

*/

function hasSymmetry(array) {
  for (var i = 0; i < array.length; i += 1) {
    var front = array[i];
    var back = array[array.length - 1 - i];

    if (front !== back) { // if a single element does not match up, then return false
      return false;
    }
  }

  return true; // AFTER we check all elements, then we know the array has symmetry
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])); // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); // => false

/*
Key Takeaways
  * We usually use nested for loops when we want to look at pairs of elmenets
  * A way you can start thinking about this is by just plugging in that first
    iteration
      // If i = 0 then the last element minus 0 is still the last element
       array.length - 1 - 0
        * So, subtracting the i from the last element while iterating through
          i, will allow once side of the iteration to move forward by i while
          at the same time the other side of the iteration will move backward by
          i, causing both itations to move in symmetry forward to the middle and
          backwards towards the middle at the same time

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hasSymmetry;
