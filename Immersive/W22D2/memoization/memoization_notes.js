// Memoizing Factorial (kind of)
// const factorial = (n) => {
//   if (n === 1) return 1;
//   return factorial(n - 1);
// }

// factorial(6); // => 720, requires 6 calls
// factorial(6); // => 720, requires 6 calls
// factorial(5); // => 120, requires 5 calls
// factorial(7); // => 5040, requires 7 calls


// Code refactored for Memoization Optimization
let memo = {}; 

const factorial = (n) => {
  // if we have calculated factorial(n) previously, fetch the stored result in memo
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  // otherwise, we have not calculated factorial(n) previously, so calculate it now,
  // but store the result in case we need it again in the future
  memo[n] = n * factorial(n - 1);
  return memo[n]
}

factorial(6); // => 720, requires 6 calls
factorial(6); // => 720, requires 1 call
factorial(5); // => 120, requires 1 call
factorial(7); // => 5040, requires 2 calls

console.log(memo); // => { '2': 2, '3': 6, '4': 24, '5': 120: '6': 720, '7': 5040 }


// More advanced example
// Memoizing Fib (actually)
const fib = (n) => {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(6); // 8


// Code refactored for Memoization Optimization
const fastFib = (n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

fastFib(6); // => 8
fastFib(50); // => 12586269025

