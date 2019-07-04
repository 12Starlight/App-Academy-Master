/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/

function fizzBuzz(max) {
  var divThreeSevenArr = [];

  for(var i = 0; i < max; i += 1) {
    if(i % 3 === 0 && i % 5 === 0) {
      continue;
    } else if (i % 3 === 0 || i % 5 === 0) {
      divThreeSevenArr.push(i);
    }
  }

  return divThreeSevenArr;
}
console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
