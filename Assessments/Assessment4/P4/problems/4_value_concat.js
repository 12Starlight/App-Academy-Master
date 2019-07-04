/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/

function valueConcat(array, obj) {
  var concat = [];

  for (var i = 0; i < array.length; i += 1) {
    var elm = array[i];

    if (obj[elm] !== undefined) { // If the 'elm' is a key in the 'obj'
      var newElm = elm + obj[elm];
      concat.push(newElm);
    } else {  // else 'elm' is not a key in the 'obj'
      concat.push(elm);
    }

  }

  return concat;
}
console.log(valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'}));
// => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

console.log(valueConcat(['a', 'b', 'c'], {b: 2, c: 3}));
// => [ 'a', 'b2', 'c3'

/*
Key Takeaway
  * obj[key] evaluates to the value
    // obj['alex'] = 'bronca' 

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueConcat;
