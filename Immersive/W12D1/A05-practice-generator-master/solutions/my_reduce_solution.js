// Write an `Array.prototype.myReduce(callback, acc)` method which takes a
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.
// 
// The shift() method removes the first element from an array and returns that 
// removed element. This method changes the length of the array.
// 
// The typeof operator returns a string indicating the type of the unevaluated 
// operand.

/*
What it looks like: typeof element

Type              Result
Undefined	          "undefined"
Null	              "object" (see below)
Boolean	            "boolean"
Number	            "number"
BigInt	            "bigint"
String	            "string"
Symbol (new in ECMAScript 2015)	"symbol"
Host object (provided by the JS environment)	Implementation-dependent
Function object (implements [[Call]] in ECMA-262 terms)	"function"
Any other object "object"


Create a function with a callback and and an accumulator parameter. Then make a 
copy of the array using 'this' and .slice(). 

Once you have created a copy of the array using 'this' create a conditional to
test using 'typeof' if the acumulator parameter variable is 'undefined'. If it
is 'undefined' then set the accumulator to the first element using .shift().

After you have created the conditional and set the accumulator, iterate through
the array using the copied array we made earlier and myEach(), we also created
earlier, pass in only the element. Then set the accumulator to the callback 
with the passed in accumulator and element parameters. 

After you have iterated through the entire copied array, return the accumulator.

*/


Array.prototype.myReduce = function (callback, acc) {
  const array = this.slice();
  if (typeof acc === 'undefined') {
    acc = array.shift();
  }

  array.myEach(el => {
    acc = callback(acc, el);
  });

  return acc;
};
// console.log([1, 2, 3, 4].myReduce((acc, e) => acc + e));