// Write a function `myFind(array, callback)` that returns the first
// element for which the callback returns true. If none is found, the 
// function should return `undefined`
// Do not use the built-in `Array.prototype.find` method.

/*
Create a function that takes in an array and a callback. Iterate through the
array, then return the first element that matches the element in the callback.

*/


function myFind (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}
console.log(myFind([1, 2, 3, 4], e => e % 2 === 0));