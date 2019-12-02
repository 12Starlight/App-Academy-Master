// Write an `Array.prototype.myFlatten()` method which flattens a 
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]
Array.prototype.myFlatten = function () {
  let flattend = [];

  this.forEach(e => {
    if (e instanceof Array) {
      flattend = flattend.concat(e.myFlatten());
    } else {
      flattend.push(e);
    }
  });

  return flattend;
};
console.log([[], 1, 2, 3, [[1, 2, 3], [1, 2]], 1].myFlatten());

