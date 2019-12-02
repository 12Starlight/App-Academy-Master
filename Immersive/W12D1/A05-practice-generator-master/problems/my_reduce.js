// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array is the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.

// Build helper method myEach(cb)
Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i += 1) {
    cb(this[i]);
  }
};

// Build Main Function
Array.prototype.myReduce = function (cb, acc) {
  let copyArr = this.slice();
  if (!acc) acc = copyArr.shift();

  copyArr.myEach(e => {
    acc = cb(acc, e);
  });

  return acc;
};
console.log([1, 2, 3, 4].myReduce((acc, e) => acc + e));