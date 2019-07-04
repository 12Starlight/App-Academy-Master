/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

magicNumbers(20) => [4, 6, 8, 16, 18]
*******************************************************************************/

function magicNumbers(max) {
  var numbers = [];

  for (var i = 0; i < max; i += 1) {
    // if (i % 4 === 0 && i % 6 === 0) {
    //   continue;
    // } else if (i % 4 === 0 || i % 6 === 0) {
    //   numbers.push(i);
    // }

    if ((i % 4 === 0 || i % 6 === 0) && (i % 12 !== 0)) {
      numbers.push(i);
    }
  }

  return numbers;
}
console.log(magicNumbers(20)); // => [4, 6, 8, 16, 18]

/*
Notes

If a number is divisable by 12, then it has to be divisable by 4 and 6 because 12 is the least common multiple of 4 and 6
  * So, all we need to do is avoid numbers that are divisable by the least common multiple of the numbers you want to avoid


*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
