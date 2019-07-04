/**************************************************************************************
Write a function `reverseString(str)` that takes in a string and returns the given string
with its characters in reverse order.

Examples:

reverseString('taco');        // => 'ocat'
reverseString('hello world'); // => 'dlrow olleh'

Difficulty: Easy
*************************************************************************************/

/*
My Working Solution

function reverseString(str) {
  return str.split('').reverse().join('');
}

// First solution
function reverseString(str) {
  var reverse = '';

  for (var i = str.length -1; i >= 0; i -=) {
    var char = str[i];

    reverse += char; // reversed = reversed + char 
  }

  return reverse;
}

*/

// Second Solution
function reverseString(str) {
  var reverse = '';

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];
    reverse = char + reverse;
  }

  return reverse;
}

console.log(reverseString('taco'));        // => 'ocat'
console.log(reverseString('hello world')); // => 'dlrow olleh'

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = reverseString;
