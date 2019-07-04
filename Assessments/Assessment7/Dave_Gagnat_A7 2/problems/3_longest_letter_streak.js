/*******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters (consecutive
letters) in the `str` that are in the `searchLetters`.

Note that a streak does not have to consist of the same letter repeated, a streak
just needs to contains letters from the `searchLetters` array.

Examples:

longestLetterStreak("ACCA", ["C"]); // => 2
longestLetterStreak("YACCADCA", ["C", "A"]); // => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]); // => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]); // => 5
*******************************************************************************/

function longestLetterStreak(str, searchLetters) {
  var currentStreak = 0;
  var longestStreak = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];

    if (searchLetters.indexOf(char) > -1) {
      currentStreak++;
    } else if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
      currentStreak = 0;
    } else {
      currentStreak = 0;
    }

    if (currentStreak > longestStreak && i === str.length - 1) {
      longestStreak = currentStreak;
      return longestStreak;
    }
  }

  return longestStreak;
}

console.log(longestLetterStreak("ACCA", ["C"])); // => 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // => 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // => 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])); // => 5

// Perfect! Nice formatting -BL 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestLetterStreak;
