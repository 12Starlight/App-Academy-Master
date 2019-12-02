// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 

/*
  [1,1,2,3]
  fibsSum(3) = fibsSum(2) + 1 + 1
  fibsSum(2) = 1 + 1 + 0
  fibsSum(1) = 1

*/

/*
Create two conditional that check to see, if the n parameter is equal to 0
or 1. 0 will return 0 just like the 0th place in the fibonacci sequence is 0. 
1 will return 1, just like the 1st place in the fibonacci sequence is 1.

Now that we have created a conditional for 0 or 1, we want to return the 
fibSum(n - 1) + fibSum(n - 2) + 1 


Note: We are only returning the sum NOT the array of fibonacci values

*/


function fibsSum(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}
console.log(fibsSum(9));