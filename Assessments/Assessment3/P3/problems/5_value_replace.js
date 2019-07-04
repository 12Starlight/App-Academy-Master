/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/

/*
My Solution

function valueReplace(array, obj){
  var newArray = [];

  for (var i = 0; i < array.length; i += 1) {
    var elm = array[i];

    for (var key in obj) {
      if (elm === key) {
        array[i] = obj[key];
      }
    }

  }

  return array;
}

*/

function valueReplace(array, obj) {
  var newArray = [];

  for (var i = 0; i < array.length; i += 1) {
    var elm = array[i];

    if (obj[elm] === undefined) { // if the 'elm' is not a key in the 'obj'
      newArray.push(elm);
    } else { // the 'elm' is inside the 'obj'
      newArray.push(obj[elm]);
    }
  }

  return newArray;
}

console.log(valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4}));
// => [ 1, 2, 'c', 4 ]

console.log(valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'}));
// => [ 'placements', 'operations', 'tommy' ]

/*
Notes

> var obj = {a: 1, b: 2, d: 4}
undefined
> obj
{ a: 1, b: 2, d: 4 }
> obj.a
1
> obj['a']
1
> obj['b']
2
> obj['d']
4
> obj['z']
undefined
> obj['p']
undefined
> obj['u']
undefined

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueReplace;
