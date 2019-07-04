/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
it's "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') => 'FourTwo'
numsToWords('123') => 'OneTwoThree'
numsToWords('159598') => 'OneFiveNineFiveNineEight'
*******************************************************************************/

/*
My Working Solution

function numsToWords(numString) {
  var words = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0'
  }
  var newStr = '';

  for (var i = 0; i < numString.length; i += 1) {
    var char = numString[i];

    for (var key in words) {
      if (char === words[key]) {
        newStr += key[0].toUpperCase() + key.slice(1).toLowerCase();
      }
    }
  }

  return newStr;
}

*/

function numsToWords(numString) {
  var words = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    0: 'Zero'
  }
  var wordString = '';

  for (var i = 0; i < numString.length; i += 1) {
    var num = numString[i];

    wordString += words[num];
  }

  return wordString;
}

console.log(numsToWords('42')); // => 'FourTwo'
console.log(numsToWords('123')); // => 'OneTwoThree'
console.log(numsToWords('159598')); // => 'OneFiveNineFiveNineEight'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numsToWords;
