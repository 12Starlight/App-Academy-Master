// Write an `Array.prototype.myFilter(callback)` that takes a callback and 
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.

// Build helper function myEach(cb)
Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i += 1) {
    cb(this[i]);
  }
};

// Build Main Function
Array.prototype.myFilter = function (cb) {
  let filtered = [];

  this.myEach(e => {
    if (cb(e)) filtered.push(e);
  });

  return filtered;
};
console.log([1, 2, 3, 4].myFilter(e => e % 2 === 0));


