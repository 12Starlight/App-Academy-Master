/*******************************************************************************
Write a function that multiples(max, num) that takes in two numbers. The function
should return an array of positive numbers less than `max` that are multiples of `num`.

Examples:

multiples(10, 2) => [ 2, 4, 6, 8 ]
multiples(15, 3) => [ 3, 6, 9, 12 ]
*******************************************************************************/

/*
My Solution

function multiples(max, num){
  var numbers = [];

  for (var i = num; i < max; i += num) {
    numbers.push(i);
  }

  return numbers;
}

*/

function multiples(max, num) {
  var number = [];

  for (var i = 1; i < max; i += 1) {
    if (i % num === 0) { // if i is a multiple of num
      number.push(i);
    }
  }

  return number;
}

console.log(multiples(10, 2)); // => [ 2, 4, 6, 8 ]
console.log(multiples(15, 3)); // => [ 3, 6, 9, 12 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = multiples;
