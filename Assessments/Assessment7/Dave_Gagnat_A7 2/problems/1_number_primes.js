// 2/4 specs passed
//
// Hey Dave, look out for my comments marked with `-BL`
//
// A few mistakes in problems 2 and 4, but otherwise nice job! I like the consistent
// formatting and it seems like you have a strong grasp on solving these problems.
// Keep it up! -BL

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

function numberPrimes(n) {
  var primes = [];

  for (var i = 2; i <= n; i += 1) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes.length;
}

console.log(numberPrimes(10)); // => 4
console.log(numberPrimes(12)); // => 5
console.log(numberPrimes(20)); // => 8
console.log(numberPrimes(100)); // => 25

// Perfect! Nice use of the `isPrime` helper function -BL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
