/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  var words = sentence.split(' ');
  var wordsArr = [];

  // for(var i = 0; i < words.length; i += 1) {
  //   var word = words[i];
  //   wordsArr.unshift(word);
  // }

  for(var i = words.length - 1; i >= 0; i -= 1) {
    var word = words[i];
    wordsArr.push(word);
  }

  var newSen = wordsArr.join(' ');
  return newSen;
}
console.log(reverseSentence("Go to the store")); // => "store the to Go"
console.log(reverseSentence("Jump, jump for joy")); // => "joy for jump Jump,"

/*
Notes

> var sen = 'go to the store'
undefined
> var words = sen.split(' ')
undefined
> words
[ 'go', 'to', 'the', 'store' ]

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
