/*******************************************************************************
Write a function primeFactors(n) that takes in a number, `n`. The function should
return an array containing all factors of `n` that are prime. A factor is a number
that divides another.

Examples:

primeFactors(10) => [ 2, 5 ]
primeFactors(24) => [ 2, 3 ]
primeFactors(30) => [ 2, 3, 5 ]
primeFactors(11) => [11]
*******************************************************************************/

/*
My Working Solution

// Build helper function isPrime(num)
// Determine, if the number is prime
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

// Build helper function factors(num)
// Creates a factors array
function factors(num) {
  var fact = [];

  for (var i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      fact.push(i);
    }
  }

  return fact;
}
console.log(factors(11));

// Build Main Function
function primeFactors(n) {
  var fact = factors(n);
  var prime = [];

  for (var i = 0; i < fact.length; i += 1) {
    var num = fact[i];

    if (isPrime(num)) {
      prime.push(num);
    }
  }

  return prime;
}

*/

// Build helper function isPrime(num)
// Determines, if num is prime
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

// Build Main function
function primeFactors(num) {
  var fact = [];

  for (var i = 1; i <= num; i += 1) {
    if (num % i === 0 && isPrime(i))  // if i is a factor of n
      fact.push(i);
    }
  }

  return fact;
}

console.log(primeFactors(10)); // => [ 2, 5 ]
console.log(primeFactors(24)); // => [ 2, 3 ]
console.log(primeFactors(30)); // => [ 2, 3, 5 ]
console.log(primeFactors(11)); // => [11]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = primeFactors;
