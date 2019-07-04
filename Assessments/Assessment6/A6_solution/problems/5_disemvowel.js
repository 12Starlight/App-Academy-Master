/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  var vowels = 'AEIOUaeiou'.split('');
  var newStr = '';

  for (var i = 0; i < string.length; i += 1) {
    var char = string[i];
    if (vowels.indexOf(char) === -1) {
      newStr += char;
    }
  }

  return newStr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
