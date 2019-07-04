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

function hipsterfyWord(word){
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = word.length - 1; i >= 0; i -= 1) {
    if (vowels.indexOf(word[i]) !== -1) {
      var hipsterWord = word.slice(0, i) + word.slice(i + 1);
      return hipsterWord;
    }
  }

  return word;
}

function hipsterfy(sentence) {
  var hipsterified = [];
  var splitSentence = sentence.split(" ");

  for (var i = 0; i < splitSentence.length; i += 1) {
    var word = splitSentence[i];
    hipsterified.push(hipsterfyWord(word));
  }

  return hipsterified.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
