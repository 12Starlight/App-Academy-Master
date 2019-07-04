/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less that or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
*******************************************************************************/

// Build helper isPrime(num)
// Determines, if the number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Build Main Function
function numberPrimes(n) {
  var primes = [];
  var count = 0;

  for (var i = 2; i <= n; i += 1) {
    if (isPrime(i)) {
      // primes.push(i);
      count += 1;
    }
  }

  // return primes.length;
  return count;
}

console.log(numberPrimes(10)); // => 4
console.log(numberPrimes(12)); // => 5
console.log(numberPrimes(20)); // => 8
console.log(numberPrimes(100)); // => 25

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
