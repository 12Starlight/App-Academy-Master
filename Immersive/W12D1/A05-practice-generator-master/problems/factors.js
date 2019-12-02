// Write a function, `factors(num)`, that returns an array containing the factors
// of a number in ascending order.
function factors(num) {
  const facts = Array.from(Array(num)).map((_, i) => i + 1);
  return facts.filter(e => num % e == 0);
};
console.log(factors(9));