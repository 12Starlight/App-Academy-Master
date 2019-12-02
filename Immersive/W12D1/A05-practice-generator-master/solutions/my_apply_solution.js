// Write a `Function.prototype.myApply(context, argsArr)` method that accepts an
// object and an array of additional arguments. It should call the function with 
// the passed-in object as `this`, also passing the arguments array. Do NOT use 
// the built-in `Function.prototype.apply` or `Function.prototype.call` methods
// in your implementation.
// 
// The bind() method creates a new function that, when called, has its this 
// keyword set to the provided value, with a given sequence of arguments 
// preceding any provided when the new function is called.

/*
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

*/

Function.prototype.myApply = function (context, args = []) {
  return this.bind(context)(...args);
};

// Also works (passing arguments at bind-time vs call-time)
Function.prototype.myApply = function (context, args = []) {
  return this.bind(context, ...args)();
};
