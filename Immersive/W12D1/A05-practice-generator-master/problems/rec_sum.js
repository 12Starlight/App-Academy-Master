// Write a recursive function `recSum(numArr)` that returns the sum of all
// elements in an array. Assume all elements are numbers.

function recSum(numArr) {
  if (!numArr.length) return 0;
  return numArr[0] + recSum(numArr.splice(1));
};
console.log(recSum([9, 4, 5, 6, 7, 7]));


