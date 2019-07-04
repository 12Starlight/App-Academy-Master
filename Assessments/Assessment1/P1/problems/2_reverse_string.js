/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

// Build helper function reverseString(str)
// Reverses any string
function reverseStr(str) {
  var revStr = '';

  for(var i = str.length - 1; i >= 0; i -= 1) {
    var char = str[i];
    revStr += char;
  }

  return revStr;
}
console.log(reverseStr('Coders Rule!'))

// Main function
function reverseString(string) {
  var revStrArr = string.split('-');
  var revArr = [];

  for(var i = revStrArr.length - 1; i >= 0; i -= 1) {
    var word = revStrArr[i];
    revArr.push(word);
    // console.log(revArr
  }

  var newStr = revArr.join('-');
  return newStr;
}
console.log(reverseString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"

/*
Notes

join()
  * Can join on any character
    // When the array is brought back together as a string, what ever character
    // you joined on (i.e ['The', 'boy'].join(' awesomee ')) === 'The awesome boy'

> var str = 'The boy';
undefined
> str
'The boy'
> var strArr = str.split(' ');
undefined
> strArr
[ 'The', 'boy' ]
> strArr.join(' awesome ');
'The awesome boy'
> var newStr = strArr.join(' awesome ');
undefined
> newStr
'The awesome boy'
>

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
