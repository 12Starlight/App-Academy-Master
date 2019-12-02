// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found.
//
// The slice() method returns a shallow copy of a portion of an array into a 
// new array object selected from begin to end (end not included) where begin 
// and end represent the index of items in that array. The original array will 
// not be modified.
// 
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.
//

/* 
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


We break apart the array into two parts and then measure the length of broken 
array, if it is an odd number we round down to the nearest whole number. This
is called the midpoint.

One we have the midpoint we use this as an index to find that number and 
compare it to the target for it being greater, smaller or equal to the target. 

If it is larger than the target we return the array cut from the first element 
up to, but not including the midpoint element. If it is smaller, we cut the 
array from one element ahead of the midpoint to the end of the array. If the 
the target does not exist, we return - 1. Finally, if the target is equal to 
the midpoint element, then we return that midpoint element.

This process repeats until the array has been completely reduced to a length of 
0, and then the call stack is returned, giving us either -1 because it does not 
exist or the index which the midpoint equals the target value.  

*/
function binarySearch(array, target) {
  if (array.length === 0) return -1;
  
  const midpoint = Math.floor(array.length / 2);
  if (array[midpoint] > target) {
    return binarySearch(array.slice(0, midpoint), target);
  } else if (array[midpoint] < target) {
    const subResult = binarySearch(array.slice(midpoint + 1), target);
    // return subResult === -1 ? -1 : subResult + midpoint + 1;
    if (subResult === - 1) return - 1;
  } else {
    return midpoint;
  }
}
// console.log(binarySearch([1, 3, 4, 5, 6], 4));
// console.log(binarySearch([2, 4, 3, 7, 4, 6, 8, 9].sort(), 11));