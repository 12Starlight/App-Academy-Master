// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.

/*
Basically it is a function that creates a new function for each argument, then
returns that function until it has gone through every argument. 

Once it has gone through all the arguments it returns the main function with 
it's original list of arguments.

*/


Function.prototype.myCurry = function (numArgs) {
  let nums = []; // ["bananna", "apple", "avacado"]
  let fcn = this;

  return function _myCurry (el) {
    nums.push(el);  // "bananna", "apple", "avacado"

    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return fcn(...nums); // returning the argument array we created above
    }
  };
};

// let breakfast = {};
// let func = (x, y, z) => x + ", " + y + ", and " + z + " is awesome for breakfast!";
// let item1 = func.myCurry(3);
// let item2 = item1("bananna")
// let item3 = item2("apple");
// console.log(item3("avacado"));
