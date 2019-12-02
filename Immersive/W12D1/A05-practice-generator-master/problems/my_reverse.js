// Write a function `myReverse(array)` which returns the array in reversed
// order. Do NOT use the built-in `Array.prototype.reverse`.
// ex. myReverse([1,2,3]) => [3,2,1]
function myReverse(array) {
  let reversed = [];

  for (let i = 0; i < array.length; i += 1) {
    reversed[i] = array[array.length - 1 - i];
  }

  return reversed;
};
console.log(myReverse('We are going to succeed!'.split('')));

