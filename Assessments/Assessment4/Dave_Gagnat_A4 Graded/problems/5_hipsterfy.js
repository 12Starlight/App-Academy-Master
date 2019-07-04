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


// You'll want to attack this using a helper function.
// Now that you have an array of words, create a helper function that will modify a single word of the sentence
// The reason this code fails is that it cannot correctly handle a word that has no vowels
// What if you were given a word with no vowels like "thy" -AZ

/*
So, I need to change this to return newSen earlier, and when no conditon is met
then I want to just return the word at the end


*/

console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
