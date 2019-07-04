/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(str) {
  var currentStreak = 0;
  var longestStreak = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];

    if (char === 'W') { // if this char is a win
      currentStreak++;
    } else if (currentStreak > longestStreak) { // max value strategy!
      longestStreak = currentStreak;
      currentStreak = 0;
    } else { // else this char is a loss
      currentStreak = 0;
    }

    if (currentStreak > longestStreak && i === str.length - 1) {
      longestStreak = currentStreak;
      currentStreak = 0;
    }
  }

  return longestStreak;
}

console.log(bestWinStreak('WWLWWWLWW')); // => 3
console.log(bestWinStreak('WWLLWWWWW')); // => 5
console.log(bestWinStreak('WWWW')); // => 4
console.log(bestWinStreak('LLL')); // => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;
