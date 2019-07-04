/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/

function isPrime(number) {
  if (number < 2) {
    return false;
  } // godo base case - MS

  for (var i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false // missing semi-colon - MS
    }
  }

  return true;
}

console.log(isPrime(-7)); // => false
console.log(isPrime(2)); // => true
console.log(isPrime(11)); // => true
console.log(isPrime(15)); // => false

// Good logic, good job using modulo, keep up the godo work - MS


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
