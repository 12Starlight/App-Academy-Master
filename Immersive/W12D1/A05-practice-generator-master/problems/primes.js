// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.

// Build helper function isPrime(num)
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i == 0) return false;
  }

  return true;
};

// Build Main Function
function primes(count) {
  let primesArr = [];
  let i = 2;

  while (primesArr.length < count) {
    if (isPrime(i)) primesArr.push(i);
    i += 1;
  }

  return primesArr;
};
console.log(primes(3));


