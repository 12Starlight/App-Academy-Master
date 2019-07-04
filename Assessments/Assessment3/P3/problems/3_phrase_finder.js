/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/
/*
My Working Solution

function phraseFinder(words, phrase){
  var wordsArr = phrase.split(' ');
  var count = 0;

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (wordsArr.indexOf(word) > -1) {
      count++;
    }
    if (count === 2) {
      return true;
    }

  }

  return false;
}

*/

function phraseFinder(words, phrase) {
  for (var i = 0; i < words.length; i += 1) {
    var word1 = words[i];

    for (var j = 0; j < words.length; j += 1) {
      var word2 = words[j];

      var currentPhrase = word1 + ' ' + word2;

      if (currentPhrase === phrase) {
        return true;
      }
    }
  }

  return false // we should only return false, AFTER we checked the entire array
}

console.log(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep')); // => true
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep')); // => true
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world')); // => true
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep')); // => true
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye')); //=> false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = phraseFinder;
