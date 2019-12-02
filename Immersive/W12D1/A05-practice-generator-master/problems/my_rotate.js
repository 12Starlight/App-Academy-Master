// Write an `Array.prototype.myRotate(times)` method which rotates the array by 
// the given argument. If no argument is given, rotate the array by one position. 
// ex.
// ["a", "b", "c", "d"].myRotate() => ["b", "c", "d", "a"]
// ["a", "b", "c", "d"].myRotate(2) => ["c", "d", "a", "b"]
// ["a", "b", "c", "d"].myRotate(-1) => ["d", "a", "b", "c"]
Array.prototype.myRotate = function (times = 1) {
  let rotation;
  let rotated = this.slice();

  if (times < 0) {
    rotation = this.length + (times % this.length);
  } else {
    rotation = times % this.length;
  }

  for (let i = 0; i < rotation; i += 1) {
    rotated.push(rotated.shift());
  }

  return rotated;
};
console.log([1, 2, 3, 4].myRotate(-2));