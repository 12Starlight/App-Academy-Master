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

/*
My Solution (solved after)

function longestBigram(sentence) {
  var words = sentence.split(' ');
  var currentBigRam = [];
  var longestBigRam = [];

  for (var i = 0; i < words.length -1; i += 1) {
    var word1 = words[i];
    var word2 = words[i + 1];

    currentBigRam.push(word1, word2);
    var current = currentBigRam.join(' ');
    var longest = longestBigRam.join(' ');

    if (current.length > longest.length) {
      longestBigRam = currentBigRam;
      currentBigRam = [];
    } else {
      return longest;
    }
  }

  return longest;
}

*/

function longestBigram(sentence) {
  var words = sentence.split(' ');
  var longest = '';

  for (var i = 0; i < words.length -1; i += 1) {
    var word1 = words[i];
    var word2 = words[i + 1];
    var bigRam = word1 + ' ' + word2;

    if (bigRam.length > longest.length) {
      longest = bigRam;
    }
  }

  return longest;
}

/*
Key Takeaways
  * Getting consecutive words is as easy as looking at consecutive
  indicies 

*/

console.log(longestBigram('measure twice cut once')); // => 'measure twice'
console.log(longestBigram("One must have a mind of winter")); // => 'must have'
console.log(longestBigram("go home to eat")); // => 'go home'
console.log(longestBigram("his last assessment is fun")); // => 'last assessment'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestBigram;
