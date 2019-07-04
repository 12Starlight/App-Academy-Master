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

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var char = word[i];

    if (vowels.indexOf(char.toLowerCase()) > -1) {
      var before = word.slice(0, i);
      var after = word.slice(i + 1);
      var newWord = before + after;
      return newWord;
    }
  }

  return word;
}
console.log(hipsterfyWord('Coders!'));

// Build Main Function
function hipsterfy(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    var vowelRemoved = hipsterfyWord(word);
    newWords.push(vowelRemoved);
  }

  var newSen = newWords.join(' ');
  return newSen;
}

console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"

/*
Notes

> 'bootcamp'.slice(0, 3)
'boo'
> 'bootcamp'.slice(4)
'camp'

*/

/*
Key Takeaways

Think about how we decomposed this problem
  * Notice the subtask hidden in this function
    // It asks us to design a function that takes in a sentence
    // that needs to have the last vowel in each word to be
    // removed
      * So, we just broke the function up into smaller pieces
      and created a helper function that takes in a single word,
      then removes the last vowel of that word
      * Then we put that function as a piece into the largeer function
    
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
