// 5/8 specs passed
//
// Hey Dave, look for my comments marked with `-BL`
//
// Nice work overall. Nice job using helper functions in the easy to medium problems
// but don't forget that they can be useful tools for the more difficult problems as well.
// Helper functions are definitely very useful for those harder problems, just as they are
// for simplifying the easier ones. Otherwise, nice formatting and good use of spacing.
// Keep it up!

/**************************************************************************************
Write a function `wordSandwich(outerWord, innerWord)` that takes in two strings and
returns a string representing a word sandwich. See the examples below.

Examples:

wordSandwich('bread', 'cheese');  // => 'BREADcheeseBREAD'
wordSandwich('BREAD', 'CHEESE');  // => 'BREADcheeseBREAD'
wordSandwich('HeLLo', 'worLD');   // => 'HELLOworldHELLO'

Difficulty: Easy
*************************************************************************************/

function wordSandwich(outerWord, innerWord) {
  var outer = outerWord.toUpperCase();
  var inner = innerWord.toLowerCase();

  return outer + inner + outer;
}

console.log(wordSandwich('bread', 'cheese'));  // => 'BREADcheeseBREAD'
console.log(wordSandwich('BREAD', 'CHEESE'));  // => 'BREADcheeseBREAD'
console.log(wordSandwich('HeLLo', 'worLD'));   // => 'HELLOworldHELLO'

// Nice job! -BL

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = wordSandwich;
