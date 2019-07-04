/*******************************************************************************
Write a function longestBigram(sentence) that takes in a sentence string and returns
the longest bigram in the sentence. A bigram is a pair of consecutive words.
When returning the bigram, include the space between the words.
Assume there will be no punctuation. In the case of a tie, return the earlier bigram.

Examples:

longestBigram('measure twice cut once'); // => 'measure twice'
longestBigram("One must have a mind of winter"); // => 'must have'
longestBigram("go home to eat"); // => 'go home'
longestBigram("his last assessment is fun"); // => 'last assessment'
*******************************************************************************/

function longestBigram(sentence) {
  var words = sentence.split(' ');
  var currentBigRam = [];
  var longestBigRam = [];

  for (var i = 0; i < words.length -1; i += 1) {
    var word1 = words[i];
    var word2 = words[i + 1];
    var current = currentBigRam.join(' ');
    var longest = longestBigRam.join(' ');

    if (current.length >= longest.length) {
      // `current` is always empty so its length will always be less than `longest.length`
      // The only time this condition is met is when longest is empty in the beginning
      // before it takes in the first two words.
      currentBigRam.push(word1, word2);
      longestBigRam = currentBigRam;
      currentBigRam = [];
    }
  }

  return longest;
}

console.log(longestBigram('measure twice cut once')); // => 'measure twice'
console.log(longestBigram("One must have a mind of winter")); // => 'must have'
console.log(longestBigram("go home to eat")); // => 'go home'
console.log(longestBigram("his last assessment is fun")); // => 'last assessment'

// Following the above comment, we want to compare the current bigram's length to
// the longest bigram's length, so we have to set `current` to equal `word1` + `word2`. 
// Almost there! -BL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestBigram;
