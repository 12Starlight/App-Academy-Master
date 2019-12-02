// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

/*
We are creating a loop that takes in a callback. The callback is called at each
iteration of the loop with the element, index, and the original array 'this'.

*/


Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};
