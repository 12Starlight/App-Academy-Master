/*******************************************************************************
Write a function fromMeToYou(sentence) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

function fromMeToYou(sentence) {
  // var words = sentence.split('me');
  // return words.join('you');

  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word === 'me') {
      newWords.push('you');
    } else {
      newWords.push(word);
    }
  }

  var newSen = newWords.join(' ');
  return newSen;
}
console.log(fromMeToYou('that made me laugh')); // => 'that made you laugh'
console.log(fromMeToYou('love me or hate me')); // => 'love you or hate you'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
