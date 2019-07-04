/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/

/*
My Working Solution

// Build helper function isPrime(num)
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
console.log(isPrime(11));

// Build helper function primeArray(num)
// Builds an array of prime numbers using an input number
function primeArray(num) {
  var prime = [];
  var range = num * num;

  for (var i = range; i >= num; i -= 1) {
    if (isPrime(i)) {
      prime.unshift(i);
    }
  }

  if (isPrime(num)) {
    return prime[1];
  } else {
    return num;
  }
}
console.log(primeArray(11));

function nextPrimeArray(array) {
  var nextPrime = [];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];
    var nextPrimeNum = primeArray(num);

    nextPrime.push(nextPrimeNum);
  }

  return nextPrime;
}

*/

// Build helper function isPrime(num)
// Determines, if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i += 1) {
    if (num % 2 === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(11));

// Build helper function nextPrime(num)
// Returns the very next prime number after the input number
function nextPrime(num) {
  for (var i = num + 1; true; i += 1) {
    if (isPrime(i)) {
      return i;
    }
  }
}
console.log(nextPrime(11));

// Build Main function
function nextPrimeArray(array) {
  var nextPrimeArr = [];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (isPrime(num)) {
      var newPrime = nextPrime(num);
      nextPrimeArr.push(newPrime);
    } else {
      nextPrimeArr.push(num);
    }
  }

  return nextPrimeArr;
}

console.log(nextPrimeArray([-4, 2, 5, 4, 11])); // => [ -4, 3, 7, 4, 13 ]
console.log(nextPrimeArray([9, 13, 5, 6])); // => [ 9, 17, 7, 6 ]
console.log(nextPrimeArray([])); // => []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = nextPrimeArray;
