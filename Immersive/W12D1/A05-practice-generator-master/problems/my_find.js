// Write a function `myFind(array, callback)` that returns the first
// element for which the callback returns true. If none is found, the 
// function should return `undefined`
// Do not use the built-in `Array.prototype.find` method.
function myFind (array, cb) {
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i])) {
      return array[i];
    }
  }
};
console.log(myFind([1, 2, 3, 4], e => e % 2 === 0));