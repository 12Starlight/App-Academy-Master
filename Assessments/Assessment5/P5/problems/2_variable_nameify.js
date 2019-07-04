/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

// Build helper function firstCap(word)
// Capitalizes the first letter of the word
function firstCap(word) {
  var newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return newWord;
}
console.log(firstCap('coders!'));

// Build Main Funtion
function variableNameify(words) {
  var newArray = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (i === 0)  // if this is the first word, then lowercase it
      newArray.push(word.toLowerCase());
    } else { // else thsi word is not the first, then capitalize it
      var capWord = firstCap(word);
      newArray.push(capWord);
    }
  }

  var newVariable = newArray.join('');
  return newVariable;
}
console.log(variableNameify(['is', 'prime'])); // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])); // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])); // => 'maxValue'

/*
Key Takeaways
  * Our code really relates to the sturcture of the problem
  * Make sure you slice the word properly
    // slice excludes slice(0, end) and includes start slice(start, 1)

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
