/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  var words = sentence.split(' ');
  // var shortestWord = words[0];
  var shortestWord = null;

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (shortestWord === null || word.length < shortestWord.length) { // if this current word is shorter than the 'shortestWord'
      shortestWord = word;
    }
  }

  return shortestWord;
}
console.log(shortestWord('app academy is cool')); // => 'is'
console.log(shortestWord('bootcamp prep')); // => 'prep'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
