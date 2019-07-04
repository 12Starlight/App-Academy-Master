/*******************************************************************************
Write a function reverse2D(array) that takes in a 2D array of strings. The function
should return a string representing the elements of the array in reverse order.

Examples:

var arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) => 'ihgfedcba'


var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) => 'PatrickOscarMikeMattJulian'

*******************************************************************************/

/*
My Working Solution

// Build helper function reverseStr(array)
// Reverses the elements in an array
function reverseStr(array) {
  var newArray = [];

  for (var i = array.length - 1; i >= 0; i -= 1) {
    var elm = array[i];

    newArray.push(elm);
  }

  var newStr = newArray.join('');
  return newStr;
}
console.log(reverseStr(['c', 'o', 'd', 'e', 'r', 's', '!']));

// Build Main Function
function reverse2D(array) {
  var newChars = [];

  for (var i = array.length - 1; i >= 0; i -= 1) {
    var elm = array[i];
    var reverseElm = reverseStr(elm);

    newChars.push(reverseElm);
  }

  var newStr = newChars.join('');
  return newStr;
}

*/

function reverse2D(array) {
  var str = '';

  for (var i = array.length - 1; i >= 0; i -= 1) {
    var subArray = array[i];

    for (var j = subArray.length - 1; j >= 0; j -= 1) {
      var elm = subArray[j];
      str += elm;
    }
  }

  return str;
}


var arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

console.log(reverse2D(arr1)); // => 'ihgfedcba'


var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
console.log(reverse2D(arr2)); // => 'PatrickOscarMikeMattJulian'

/*
Key Takeaways
  * Take notice where you delcare your string variable because you want it to stay
    in tact the entire way through
  * You want to then return your string variable AFTER your loop because you want
    to return that complete string 

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverse2D;
