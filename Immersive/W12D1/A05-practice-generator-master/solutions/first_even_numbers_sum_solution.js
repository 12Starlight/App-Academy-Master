// Write a function `firstEvenNumbersSum(n)` that returns the sum of the
// first n even numbers recursively. Assume n > 0

/*
Determine when n is equal to 1. This is done for the reason that the first even
number will in fact be 2. 

Next we want to multiply n parameter by 2, and then add each recursive call to
the end which passes in the reduced value of n each time. 

Once the recursive call has hit it's return, it adds each return the previous 
stack until the entire stack has been added together giving us the sum.

*/


function firstEvenNumbersSum(n) { // n = 2 // return 6, 4, 2 // stack // 2 + 4 + 6 
  if (n === 1) return 2;
  return 2 * n + firstEvenNumbersSum(n - 1); // 2 * 3, 2 * 2, 2 * 1 
}
console.log(firstEvenNumbersSum(3));