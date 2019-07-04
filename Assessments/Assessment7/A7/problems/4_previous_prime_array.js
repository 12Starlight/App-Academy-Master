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
  for (var i = num - 1; true; i -= 1) {
    if (isPrime(i)) {
      return i;
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

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
