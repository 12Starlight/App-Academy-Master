// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 
function fibsSum(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibsSum(num - 1) + fibsSum(num - 2) + 1;
};
console.log(fibsSum(9));



