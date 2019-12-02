// Write an `Array.prototype.mySome(callback)` method which takes a callback 
// and returns true if the callback returns true for ANY element in the array. 
// Otherwise, return false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.

// Build helper function myEach(cb) 
Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i += 1) {
    cb(this[i]);
  }
};

// Build Main Function
Array.prototype.mySome = function (cb) {
  let some = false;

  this.myEach(e => {
    if (cb(e)) some = true;
  });

  return some;
};
console.log([1, 2, 3, 4].mySome(e => e % 2 === 0));