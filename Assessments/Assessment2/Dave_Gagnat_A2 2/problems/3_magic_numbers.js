/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

magicNumbers(20) => [4, 6, 8, 16, 18]
*******************************************************************************/

function magicNumbers(max) {
  var numbers = [];

  for (var i = 0; i < max; i += 1) {
    if (i % 4 === 0 && i % 6 === 0) {
      continue;
    } else if (i % 4 === 0 || i % 6 === 0) {
      numbers.push(i);
    } // perfect - MS
  }

  return numbers;
}
console.log(magicNumbers(20)); // => [4, 6, 8, 16, 18]

// Perfect solution, very similar to fizzbuzz, I really like your solution
// because it reads really well - MS

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
