// Write an `Array.prototype.myReject(callback)` method. Return a new array, 
// which contains only the elements for which the callback returns false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the 
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]

// Build helper function myEach(cb) 
Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i += 1) {
    cb(this[i]);
  }
};

// Build Main Function
Array.prototype.myReject = function (cb) {
  let rejected = [];

  this.myEach(e => {
    if (!cb(e)) rejected.push(e);
  });

  return rejected;
};
console.log([1, 2, 3, 4].myReject(e => e % 2 === 0));
console.log([1, 2, 3].myReject((el) => el > 2)); // => [1, 2])