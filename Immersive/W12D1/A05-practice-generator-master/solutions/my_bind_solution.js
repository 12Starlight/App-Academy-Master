// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.
// 
// The apply() method calls a function with a given this value, and arguments 
// provided as an array (or an array-like object).

/*
While the syntax of this function is almost identical to that of call(), the
fundamental difference is that call() accepts an argument list, while apply()
accepts a single array of arguments.

var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

Note: So, apply() attaches an array of arguments?

*/

Function.prototype.myBind = function (context, ...bindArgs) {
  const that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};
