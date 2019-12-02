// Write a function, `exponent(b, n)`, that calculates b^n recursively.
// Your solution should accept negative values for n. Do NOT use ** or Math.pow

/* 
First I want to determine when n equals 0, then return 1. This is done because
1 times itself is itself. 

Next I want to determine, if the n is greater than zero. Then I could multiply
the base times the number variable (n) which decreases by 1 by calling itself 
exponent(b, n - 1). If n is less than 0, then we multiply a fraction and 
n until it reaches 0.

Once zero is hit, the function will return the stack multiply each recursive 
call to either the base in a greater than 0 scenero or 1/b. Thus reducing the 
number relatively by each recursive call.

*/


function exponent(b, n) {
  if (n === 0) return 1;

  if (n > 0) {
    return b * exponent(b, n - 1); 
  } else {
    return 1/b * exponent(b, n + 1); // negative values
  }
}
console.log(exponent(2, 3));