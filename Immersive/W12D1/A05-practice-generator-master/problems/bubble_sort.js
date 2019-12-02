// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in `Array.prototype.sort` method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

// Build helper function callback(x, y)
const callback = (x, y) => {
  return x < y ? -1 : x > y ? 1 : 0;
};

// Build Main Function
Array.prototype.bubbleSort = function (cb) {
  if (!cb) cb = callback
  let sorted = false;
  let resultArr = this.slice();

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < resultArr.length - 1; i += 1) {
      if (cb(resultArr[i], resultArr[i + 1]) === 1) {
        [resultArr[i], resultArr[i + 1]] = [resultArr[i + 1], resultArr[i]];
        sorted = false;
      }
    }
  }

  return resultArr;
};
console.log([1, 0, 9, 3, 8, 2, 5, 7, 0, 2, 3, 4, 9, 5, 7, 8].bubbleSort(callback));


