/**************************************************************************************
Write a function `areCoprime(num1, num2)` that takes in two numbers and returns a boolean
indicating whether or not the given numbers are coprime. Two numbers are said to be coprime
if the only common factor between them is the number 1.

For example,
  16 and 25 are coprime because 1 is the only number that divides both of them
  14 and 21 are not coprime because 7 divides both of them

Examples:

areCoprime(16, 25); // => true
areCoprime(15, 14); // => true
areCoprime(14, 21); // => false
areCoprime(15, 6);  // => false
areCoprime(15, 5);  // => false

Difficulty: Medium
*************************************************************************************/

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
console.log(isPrime(7));

// Build helper function factors(num)
// Creates an array of factors
function factors(num) {
  var fact = [];

  for (var i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      fact.push(i);
    }
  }

  return fact;
}
console.log(factors(16));

// Build Main Function
function areCoprime(num1, num2) {
  var factor1 = factors(num1);
  var factor2 = factors(num2);

  if (factor1.length > factor2.length) {
    var len = factor1;
  } else {
    var len = factor2;
  }

  for (var i = 2; i < len.length; i += 1) {
    var num = len[i];

    if (isPrime(num) && (num % num2 === 0 || num % num1 === 0)) {
      return false;
    }
  }

  return true;
}

console.log(areCoprime(16, 25)); // => true
console.log(areCoprime(15, 14)); // => true
console.log(areCoprime(14, 21)); // => false
console.log(areCoprime(15, 6));  // => false
console.log(areCoprime(15, 5));  // => false

// In the main function `areCoprime` we only want to check whether the factors of the both
// numbers are 1 and the number itself. We can do this by checking whether the elements
// of `factor1` and `factor2` contain `[ 1, num1 ]` and `[ 1, num2 ]` respectively. -BL

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = areCoprime;
