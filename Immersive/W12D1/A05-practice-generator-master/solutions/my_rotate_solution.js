// Write an `Array.prototype.rotate(times)` method which rotates the array by
// the given argument. If no argument is given, rotate the array by one position. 
// ex.
// ["a", "b", "c", "d"].myRotate() => ["b", "c", "d", "a"]
// ["a", "b", "c", "d"].myRotate(2) => ["c", "d", "a", "b"]
// ["a", "b", "c", "d"].myRotate(-1) => ["d", "a", "b", "c"]

/*
Create a function that takes in a times parameter. Then create a rotations 
variable. Then create a rotated (copy) array variable and set it using slice().

After you have created a rotations and rotated copy array variable, create a 
conditional. We want to test, if the times parameter is less than 0. If it is,
we want to set our rotations variable to the length of the array plus the 
remainder of times / the length of the array using the modulo '%' operator.

If it is not less than zero, set the rotations vairable to just times % the
length of the array.

After we have determined, if the times parmeter is less than zero or greater
than 0, we want to iterate through rotations. Then we want to push the first 
element of the rotated copy array back onto the end of the rotated copy array.

Once we have iterated through all of the elements, we want to return the 
rotated copy array.


Note: .slice(0) will make a copy of the array, exactly like .slice() will. 

*/


Array.prototype.myRotate = function (times = 1) {
  let rotations;
  const rotated = this.slice(0);

  if (times < 0) {
    rotations = this.length + (times % this.length);
  } else {
    rotations = times % this.length;
  }

  for (let i = 0; i < rotations; i++) {
    rotated.push(rotated.shift());
  }

  return rotated;
};
