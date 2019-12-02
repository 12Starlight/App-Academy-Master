// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 9 (i.e. more than one digit), sum the 
// digits of the resulting number. Keep repeating until there is only one digit 
// in the result, called the "digital root".
// 
// The reduce() method executes a reducer function (that you provide) on each 
// element of the array, resulting in a single output value.
// 
// **Do not use string conversion within your method.** 
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.

/* 
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


The reducer function takes four arguments:

  Accumulator (acc)
  Current Value (cur) 
  Current Index (idx)
  Source Array (src)

Your reducer function's returned value is assigned to the accumulator, whose 
value is remembered across each iteration throughout the array and ultimately 
becomes the final, single resulting value.


Note: To sum up the values contained in an array of objects, you must supply an 
initialValue, so that each item passes through your function.


var initialValue = 0;
var sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)
console.log(sum) // logs 6


Alternatively written with an arrow function:

var initialValue = 0;
var sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    ,initialValue
);
console.log(sum) // logs 6


Determine how many times a parameter number is divided by 10, then take the 
remainder and push the remainder into a digits array. Then because the number 
was divisible by 10, we want to change the parameter number.

This is done by dividing the number by 10 which we already took the remainder
for that current set of 10 numbers, thus reducing the number by 1 digit. 

After we have reduced the number down to something that is smaller than 10, we
want to make sure the digits array is not greater than 10 when added up. 

This is done by using reduce and setting the accumulator to the first number in
digits and adding each additional number afterword. We then save this into a 
digitSum variable

Last we want to check, if digitSum is greater than 10. If it is then we return
digitalRoot(digitSum) and repeat the process. If it is not greater than 10, 
then we simply return digitSum. 

*/

// Build Main Function 
function digitalRoot(num) {
  while (num >= 10) {
    num = digitalRootStep(num);
  }

  return num;
};

// Build helper function digitalRootStep(num)
function digitalRootStep(num) {
  let root = 0;

  while (num > 0) {
    root += num % 10;
    num = Math.floor(num / 10);
  }

  return root;
};


// Alternate Solution
function digitalRoot(num) {
  const digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  const digitSum = digits.reduce((sum, digit) => sum + digit);
  return digitSum >= 10 ? digitalRoot(digitSum) : digitSum;
};


// Magical one - line solution
function digitalRoot(num) {
  return num < 10 ? num : digitalRoot(digitalRoot(Math.floor(num / 10)) + (num % 10));
};
// console.log(digitalRoot(1945));