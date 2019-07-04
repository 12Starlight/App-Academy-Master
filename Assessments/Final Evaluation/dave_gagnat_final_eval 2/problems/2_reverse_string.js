/**************************************************************************************
Write a function `reverseString(str)` that takes in a string and returns the given string
with its characters in reverse order.

Examples:

reverseString('taco');        // => 'ocat'
reverseString('hello world'); // => 'dlrow olleh'

Difficulty: Easy
*************************************************************************************/

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('taco'));        // => 'ocat'
console.log(reverseString('hello world')); // => 'dlrow olleh'

// Good job! Generally, we don't like to chain methods because it is seen as bad form
// but we can focus on that later. If this makes sense to you right now then you should 
// stick to what you feel comfortable with -BL

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = reverseString;
