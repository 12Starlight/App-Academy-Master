/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

function hipsterfyWord(word) {
  var vowels = 'aeiou'.split('');
  var newStr = '';

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var char = word[i];

    if (vowels.indexOf(char.toLowerCase()) > -1) { // char is a vowel
      // the vowel we just found is at index 'i'

      // var newWord = word.slice(0, i) + word.slice(i + 1);
      var before = word.slice(0, i);
      var after = word.slice(i + 1);
      var newWord = before + after;

      return newWord;
    }
  }
}
console.log(hipsterfyWord('proper')); // => 'propr'
console.log(hipsterfyWord('tonic')); // => 'tonc'
console.log(hipsterfyWord('PANTHER')); // => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')); // => 'BACKWRDS'

/*
Notes

> var word = 'backwards'
undefined
> word
'backwards'
> word[5]
'a'
> var before = word.slice(0, 5)
undefined
> before
'backw'
> var after = word.slice(5 + 1)
undefined
> after
'rds'
> before + after
'backwrds'

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
