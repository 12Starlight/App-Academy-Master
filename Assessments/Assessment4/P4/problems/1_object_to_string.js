/*******************************************************************************
Write a function `objectToString(count)` that takes in a char count object and
returns a string representing the counts of each character.

Examples:

objectToString({a : 2, b: 4, c: 1}) => 'aabbbbc'
objectToString({b: 1, o: 2, t: 1}) => 'boot'
*******************************************************************************/

function objectToString(count) {
  var counts = '';

  for (var key in count) {

    for (var i = 0; i < count[key]; i += 1) { // this loop should iterate 'count[char]' number of times
      var value = count[key][i];

      counts += key;
    }
  }

  return counts;
}
console.log(objectToString({a : 2, b: 4, c: 1})); // => 'aabbbbc'
console.log(objectToString({b: 1, o: 2, t: 1})); // => 'boot'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = objectToString;
