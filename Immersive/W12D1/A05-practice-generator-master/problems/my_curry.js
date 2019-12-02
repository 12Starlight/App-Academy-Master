// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.
Function.prototype.myCurry = function (numArgs) {
  let nums = [];
  let func = this;

  return function _myCurry(e) {
    nums.push(e);

    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return func(...nums);
    }
  }
};
let breakfast = {};
let func = (x, y, z) => x + ", " + y + ", and " + z + " is awesome for breakfast!";
let item1 = func.myCurry(3);
let item2 = item1("bananna")
let item3 = item2("apple");
console.log(item3("avacado"));