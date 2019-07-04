/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function prevPrime(n) {
  for (var i = n - 1; i >= 2; i -= 1) {
    if (isPrime(i)) {
      return i;
    }
  }

  return null;
}

function previousPrimeArray(array) {
  var newArr = [];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (isPrime(num)) {
      var newPrime = prevPrime(num);
      newArr.push(newPrime);
    } else {
      newArr.push(num);
    }
  }

  return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
