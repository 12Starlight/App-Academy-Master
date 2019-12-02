// Write a function `myReverse(array)` which returns the array in reversed
// order. Do NOT use the built-in `Array.prototype.reverse`.
// ex. myReverse([1,2,3]) => [3,2,1]

/*
Create a function that takes in an array. Create a reversed array variable and 
set it to an empty array. Then iterate through that function and set each 
element to the last element by subtracting i from the the last element at each 
iteration.
  array[i] = array[array.length - 1 - i];

After each iteration, return the reversed array. 

*/

function myReverse(array) {
  const result = [];
  for (let i = 1; i < array.length + 1; i++) {
    result[i - 1] = array[array.length - i];
  }

  return result;
};
// console.log(myReverse('We are going to succeed!'.split('')));
