// Write a function, `doubler(arr)`, that returns a copy of the input array
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
// doubler([1, 2, 3]) => [2, 4, 6]

/*
Use map to create a shallow copy of the array with each element doubled.

*/

function doubler(array) {
  return array.map(el => el * 2);
}
// console.log(doubler([1, 2, 3])); // => [2, 4, 6]