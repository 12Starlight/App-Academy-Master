// Write an `Array.prototype.myEvery(callback)` method that returns true 
// if the callback returns true for every element in the array, and otherwise 
// returns false. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach` 
// methods.

// Build helper method myEach(cb)
Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i += 1) {
    cb(this[i]);
  }
};

// Build Main Function
Array.prototype.myEvery = function (cb) {
  let every = true;

  this.myEach(e => {
    if (!cb(e)) every = false;
  });

  return every;
};
console.log([12, 4].myEvery(e => e % 2 === 0));