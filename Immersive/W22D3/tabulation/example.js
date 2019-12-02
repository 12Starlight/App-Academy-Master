// Tabulation of 'fib' 
// fib(0) // => 0
// fib(1) // => 1
// fib(2) // => 1
// fib(6) // => 8
// fib(7) // => 13
const tabulatedFib = (n) => {
  // create a blank array of length `n`
  let table = new Array(n);

  // seed the first two values
  table[0] = 0;
  table[1] = 1; 

  // complete the table by moving from left to right,
  // follwing the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(tabulatedFib(7)); // => 13


// Refactored
const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
 
  let secondLast = 0;
  let last = 1;

  for (let i = 2; i <= n; i ++ 1) {
    let temp = last;
    last = last + secondLast;
    secondLast = temp;
  }

  return last; 
}