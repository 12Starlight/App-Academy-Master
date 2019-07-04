/*******************************************************************************
Write a function bigramArray(sentence) that takes in a sentence string and returns
the an array of containing all bigrams in the sentence. A bigram is a pair of
consecutive words of a sentence.

Examples:

bigramArray('today is a great day') => [ 'today is', 'is a', 'a great', 'great day' ]
bigramArray('bigrams are very useful') => [ 'bigrams are', 'are very', 'very useful' ]
*******************************************************************************/

function bigramArray(sentence) {
  var words = sentence.split(' ');
  var bigRams = [];

  for (var i = 0; i < words.length -1; i += 1) {
    var word1 = words[i];
    var word2 = words[i + 1];
    var bigRam = [];

    bigRam.push(word1, word2);

    var combined = bigRam.join(' ');
    bigRams.push(combined);
  }

  return bigRams;
}

/*
Notes

> var words = 'hello bootcamp prep'.split(' ')
undefined
> words
[ 'hello', 'bootcamp', 'prep' ]
> words[2]
'prep'
> words[2 + 1]
undefined

*/

/*
Key Takeways
  * When it comes to looking at adjacent things in an array or even
  in a string, this is called the sliding window strategy
  * So what we are doing is looking at two elements at once, in this
  case two words
  * Consecutive elements in an array, also have consecutive indicies

*/

console.log(bigramArray('today is a great day')); // => [ 'today is', 'is a', 'a great', 'great day' ]
console.log(bigramArray('bigrams are very useful')); // => [ 'bigrams are', 'are very', 'very useful' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bigramArray;
