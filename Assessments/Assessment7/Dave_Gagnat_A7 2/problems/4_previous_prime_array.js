/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/

// Build helper function isPrime(num)
// Determines, if a number is prime
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
console.log(isPrime(11));

// Build helper function previousPrime(num)
// Returns the previous prime number
function previousPrime(num) {
  for (var i = num - 1; i >= 2; i -= 1) { // Since `true` is always `true`, this is going
    if (isPrime(i)) {                   // to run infinitely if it doesn't hit
      return i;                         // a prime number -BL
    }
  }
}
console.log(previousPrime(11));

// Build Main Function
function previousPrimeArray(array) {
  var previousPrimes = [];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (num === null) {
      previousPrimes.push(null);
    }

    if (isPrime(num)) {
      var prime = previousPrime(num);
      previousPrimes.push(prime);
    } else {
      previousPrimes.push(num);
    }
  }

  return previousPrimes;
}

console.log(previousPrimeArray([10, 12, 11, 7, 16])); // => [ 10, 12, 7, 5, 16 ]
console.log(previousPrimeArray([17, 24, 29, 5, 2, 4])); // => [ 13, 24, 23, 3, null, 4 ]


// On line 33, inside of `previousPrime(num)`, we want to give a condition for `i` to reach
// in order to stop iterating. Since `true` is always `true`, the `for` loop will keep
// running infinitely if it doesn't hit a prime number to stop and return at. Instead,
// since we're decrementing from `num - 1`, we can stop at 2, since 2 is the lowest possible
// prime number. We also want `previousPrime(num)` to return null if it doesn't find
// a prime number. Just a small mistake. Otherwise, everything else looks good! -BL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
