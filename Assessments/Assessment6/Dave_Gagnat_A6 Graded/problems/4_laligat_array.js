/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/

// Great! -AZ
// Build helper function isPrime(n)
// Determines, if a number is prime
function isPrime(n) {
  if (n === 2) {
    return true;
  }

  for (var i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(14));

// Build helper function sumPrimes(num)
// Sums all the prime numbers
function sumPrime(num) {
  var sum = 0;

  for (var i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumPrime(10));

function laligatArray(array) {
  var sum = [];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];
    var primeSum = sumPrime(num);

    sum.push(primeSum);
  }

  return sum;
}
console.log(laligatArray([10, 11, 20, 15])); // => [ 17, 28, 77, 41 ]
console.log(laligatArray([1, 2, 3, 4, 5])); // => [ 0, 2, 5, 5, 10 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = laligatArray;
