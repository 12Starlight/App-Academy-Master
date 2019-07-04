/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/
/*
My Solution

function hipsterfy(sentence) {
  var vowels = 'aeiou'.split('');
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    for (var j = word.length -  1; j >= 0; j -= 1) {
      var char = word[j];

      if (vowels.indexOf(char.toLowerCase()) > -1) {
        var before = word.slice(0, j);
        var after = word.slice(j + 1);
        var newWord = before + after;
        break;
      }
    }

    newWords.push(newWord);
  }

  var newSen = newWords.join(' ');
  return newSen;
}

*/

// Build helper function hipsterfyWord(word)
// Identifies the last vowel of a word and removes it
function hipsterfyWord(word) {
  var vowels = 'aeiou'.split('');

  for (var i = word.length - 1; i >= 0; i += 1) {
    var char = word[i];

    if (vowels.indexOf(char.toLowerCase()) > -1) {
      var before = word.slice(0, i);
      var after = word.slice(i + 1);
      var newWord = before + after;
      return newWord;
    }
  }
}
console.log(hipsterfyWord('Coders!'));


console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
