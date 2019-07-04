/*******************************************************************************
Write a funtion productCallback(num1, num2, cb) that takes in two numbers and a
callback function. The function should return the result of the callback function
when passed the product of the two numbers.

Examples:

productCallback(-2, 6, Math.abs) // => 12
productCallback(12, 3, Math.sqrt) // => 6
*******************************************************************************/

function productCallback(num1, num2, cb) {
  // var product = num1 * num2;
  // var result = cb(product);
  //
  // return result;

  return cb(num1 * num2);
}
console.log(productCallback(-2, 6, Math.abs)); // => 12
console.log(productCallback(12, 3, Math.sqrt)); // => 6

/*
Notes

> var product = -2 * 6
undefined
> product
-12
> Math.abs(-12);
12

*/

/*
Notes

> function productCallback(num1, num2, cb) {
...   // var product = num1 * num2;
...   // var result = cb(product);
...   //
...   // return result;
...
...   return cb(num1 * num2);
... }
undefined
> productCallback(3, 12, Math.sqrt);
6
> function double(n) {
... return n * 2;
... }
undefined
> double(12);
24
> productCallback(5, 5, double);
50

*/

/*
Key Takeaways
  * When passing in callback functions, you only need to say the name and not add
    the ()

*/


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = productCallback;
