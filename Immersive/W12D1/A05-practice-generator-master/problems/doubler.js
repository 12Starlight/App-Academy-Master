// Write a function, `doubler(arr)`, that returns a copy of the input array 
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
// doubler([1, 2, 3]) => [2, 4, 6]
function doubler(arr) {
  return arr.map(e => e * 2);
};
console.log(doubler([1, 2, 3])); // => [2, 4, 6]