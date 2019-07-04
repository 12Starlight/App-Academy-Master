/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

/*
My Solution

function longestWord(sentence) {
  var words = sentence.split(' ');
  var longest = '';
  var longestArr = [];

  for (var i = words.length - 1; i >= 0; i -= 1) {
    var word = words[i];

    if (word.length > longest.length) {
      longest = word;
    } else if (longest.length === word.length) {
      return longest;
    }
  }


  return longest;
}

*/

function longestWord(sentence) {
  var words = sentence.split(' ');
  var longest = '';

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word.length >= longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord('app academy is cool')); // => 'academy'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('bootcamp')); // => 'bootcamp'
console.log(longestWord('')); // => ''
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
