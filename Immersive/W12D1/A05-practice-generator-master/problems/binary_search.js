// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.
function binarySearch(sorted, target) {
  if (!sorted.length) return -1;
  const midpoint = Math.floor(sorted.length / 2);

  if (sorted[midpoint] > target) {
    return binarySearch(sorted.slice(0, midpoint), target);
  } else if (sorted[midpoint] < target) {
    const subResult = binarySearch(sorted.slice(midpoint + 1), target);
    if (subResult === -1) return -1;
  } else {
    return midpoint;
  }
};
console.log(binarySearch([1, 3, 4, 5, 6], 4));
console.log(binarySearch([2, 4, 3, 7, 4, 6, 8, 9].sort(), 11));