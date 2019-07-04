/*******************************************************************************
Write a function that dynamicFizzBuzz(max, num1, num2) that returns an array
of numbers up to the max. Each number should be either divisible by num1 or num2,
BUT NOT BOTH.

Examples:

dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*******************************************************************************/

function dynamicFizzBuzz(max, num1, num2){
  var divisible = [];

  for (var i = 1; i < max; i += 1) {
    if (i % num1 === 0 && i % num2 === 0) {
      // continue;
    } else if (i % num1 === 0 || i % num2 === 0) {
      divisible.push(i);
    }

  }

  return divisible;
}

// Correct!
// For fun, here's some food for thought:
// If you remove the continue but keep the if statement around it, this code still works.
// Why is that?
/*
Does it still work beacuse the code is still being used in a conditional, and when that
conditional is met nothing is done?

*/

// -AZ


console.log(dynamicFizzBuzz(20, 5, 3)); // => [3, 5, 6, 9, 10, 12, 18]
console.log(dynamicFizzBuzz(20, 4, 6)); // => [4, 6, 8, 16, 18]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = dynamicFizzBuzz;
