/*******************************************************************************
Write a function `myFind(arr, cb)` that accepts an array and a callback. It should
return the first element of the array where the callback returns true when passed
each element. The function should return undefined if the callback does not return
true for any element.

Example:

function isUpper(str) {
  return str.toUpperCase() === str;
}

myFind(['bootcamp', 'PREP', 'IS', 'fun'], isUpper) => 'PREP'
myFind(['hello', 'world'], isUpper) => undefined


function isEven(n) {
  return n % 2 === 0;
}

myFind([11, 7, 10, 20], isEven) => 10
myFind([3, 5, 9], isEven) => undefined
*******************************************************************************/

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i += 1) {
    var elm = arr[i];

    if (cb(elm)) { // if the cb returns true
      return elm;
    }
  }

  // return undefined;
}

function isUpper(str) {
  return str.toUpperCase() === str;
}

console.log(myFind(['bootcamp', 'PREP', 'IS', 'fun'], isUpper)); // => 'PREP'
console.log(myFind(['hello', 'world'], isUpper)); // => undefined


function isEven(n) {
  return n % 2 === 0;
}

console.log(myFind([11, 7, 10, 20], isEven)); // => 10
console.log(myFind([3, 5, 9], isEven)); // => undefined

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myFind;
