// Write a `Function.prototype.myCall(context)` method, that accepts an object,
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.
// 
// The call() method calls a function with a given this value and arguments 
// provided individually.

/*
While the syntax of this function is almost identical to that of apply(), 
the fundamental difference is that **call() accepts an argument list**, while 
apply() accepts a single array of arguments.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"

*/


Function.prototype.myCall = function (context, ...args) {
  return this.bind(context)(...args);
};

// Also works (passing arguments at bind-time vs call-time)
Function.prototype.myCall = function (context, ...args) {
  return this.bind(context, ...args)();
};
